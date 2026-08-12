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

```vb
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

```java
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
