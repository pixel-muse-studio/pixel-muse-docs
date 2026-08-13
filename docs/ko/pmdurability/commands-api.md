# ⌨️ PMdurability 명령어와 API

## 관리자 명령어

모든 아이템 명령은 주 손의 PMdurability 아이템을 대상으로 합니다.

| 명령어 | 설명 | 권한 |
|---|---|---|
| `/pmdurability inspect` | ID·내구도·Tint·UUID 확인 | `pmdurability.inspect` |
| `/pmdurability damage <값>` | 내구도 감소 | `pmdurability.admin` |
| `/pmdurability repair <값>` | 지정 값만큼 회복 | `pmdurability.admin` |
| `/pmdurability repair full` | 완전 수리 | `pmdurability.admin` |
| `/pmdurability set <값>` | 현재 내구도 설정 | `pmdurability.admin` |
| `/pmdurability reload` | 설정과 아이템 동기화 | `pmdurability.reload` |

별칭: `/pmdura`

## 명령어 예제

```text
/pmdurability damage 10
/pmdurability repair 25
/pmdurability repair full
/pmdurability set 1
```

## PlaceholderAPI

주 손 아이템 기준이며 대상이 없으면 빈 문자열입니다.

```text
%pmdurability_id%
%pmdurability_current%
%pmdurability_max%
%pmdurability_percent%
%pmdurability_tint%
%pmdurability_uuid%
```

표시 예제:

```yaml
lore:
  - "<gray>남은 내구도: %pmdurability_current% / %pmdurability_max%"
```

## Skript

새 이벤트 문법은 서버 전체 재시작 후 등록됩니다.

```vb [durability.sk]
on pm durability change:
    send "내구도 변경 아이템: %event-string%" to event-player

on pm durability break:
    cancel event

on pm durability tool use:
    # Shift 제작도 실제 제작 횟수만큼 발생
```

## Java 이벤트 API

| 이벤트 | 발생 시점 |
|---|---|
| `PMDurabilityChangeEvent` | 실제 내구도 변경 전 |
| `PMDurabilityBreakEvent` | 파손 직전 |
| `PMDurabilityToolUseEvent` | 제작 도구 1회 사용마다 |

```java [DurabilityListener.java]
@EventHandler
public void onChange(PMDurabilityChangeEvent event) {
    if (!event.getItemId().equals("pm_durability:status_sword")) return;
    if (event.getNewDurability() <= 5) {
        event.setNewDurability(5);
    }
}
```

```java
@EventHandler
public void onBreak(PMDurabilityBreakEvent event) {
    // 취소하면 내구도 1로 보호됩니다.
    event.setCancelled(true);
}
```

```java
@EventHandler
public void onToolUse(PMDurabilityToolUseEvent event) {
    int index = event.getCraftIndex();
    int total = event.getCraftTotal();
    // 예: '10번 칼질하기' 퀘스트 카운트 +1
}
```

## 악용 방지와 장애 대응

관리자 명령 권한은 일반 플레이어에게 상속하지 마세요. 특히 `pmdurability.admin`과 `pmdurability.reload`는 운영자 전용으로 제한합니다.

배포 전에는 다음 항목을 테스트 서버에서 확인하세요.

- 거래소·상점·우편·커스텀 GUI가 표시용 복사본을 실제 아이템으로 저장하지 않는지 확인합니다.
- 중첩 가능한 아이템은 `UUID` 하나만으로 진위를 판단하지 않습니다. 아이템 ID, 현재·최대 내구도와 수량을 함께 검증합니다.
- Shift 제작, 모루, 제작대, 음식 사용을 동시에 반복해 아이템 복제와 내구도 초과 복구가 없는지 확인합니다.
- 퀘스트·발전과제 연동은 `PMDurabilityChangeEvent`의 실제 변경량과 `PMDurabilityToolUseEvent`의 제작 횟수를 기준으로 집계합니다.
- 리로드 전에는 서버 백업을 만들고, 거래·제작 GUI를 닫은 뒤 실행합니다. 리로드 직후 `/pmdurability inspect`로 표본 아이템을 확인합니다.

이상 징후가 보이면 우선 해당 제작법이나 거래 기능을 중지하고 로그와 문제 아이템을 보존하세요. 아이템을 일괄 삭제하거나 `UUID` 중복만으로 제거하면 정상 아이템까지 손실될 수 있습니다. 복구는 백업 복제 서버에서 먼저 검증한 뒤 운영 서버에 적용합니다.

::: warning 구현 확인이 필요한 경계
다른 플러그인이 이벤트를 취소하거나 아이템 컴포넌트를 다시 쓰는 경우가 있습니다. 거래소, 퀘스트, GUI, 인벤토리 동기화 플러그인은 업데이트할 때마다 회귀 테스트하세요.
:::
