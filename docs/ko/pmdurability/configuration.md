# ⚙️ PMdurability 설정

## 전역 설정

`plugins/PMdurability/config.yml`

```yaml
lore: "<!i><gray>내구도: {current} / {max}"
gauge-default: damaged
repair-material-default-percent: 25

anvil:
  combine-bonus-percent: 5
  merge-enchantments: highest
  keep-custom-name: first
  component-source: first

sync-chunks-per-tick: 4
```

## CraftEngine PDC 키

PDC는 아이템 안에 저장되는 플러그인 전용 데이터입니다.

| 키 | 형식 | 설명 |
|---|---|---|
| `pmdurability:tint` | HEX | 기본 게이지 색상 |
| `pmdurability:tint_30/15` | HEX | 남은 내구도 30%~15% 구간 색상 |
| `pmdurability:gauge` | 문자열 | `damaged`, `always`, `never` |
| `pmdurability:craft_damage` | 정수 | 제작 1회당 소모량 |
| `pmdurability:repair_material` | 문자열 | 모루 수리 재료 ID, 쉼표로 복수 지정 |
| `pmdurability:repair_amount` | 정수 | 재료 1개당 회복량 |
| `pmdurability:break_protection` | 1/0 | 파손 시 내구도 1로 보호 |
| `pmdurability:unbreakable` | 1/0 | 모든 내구도 감소 방지 |

## 단계별 색상 예제

기본 `tint`를 먼저 정하고 구간 색상을 추가합니다. 남은 내구도 비율이 구간 안에 들어오면 구간 색상이 우선됩니다.

```yaml
pdc:
  "pmdurability:tint": "#55FFFF"
  "pmdurability:tint_30/15": "#FFB020"
  "pmdurability:tint_15/0": "#FF3636"
```

## 수리 재료 예제

```yaml
pdc:
  "pmdurability:tint": "#B0B0B0"
  "pmdurability:repair_material": "minecraft:iron_ingot, pm_material:steel"
  "pmdurability:repair_amount": 20
```

철 주괴 또는 `pm_material:steel` 한 개를 모루에 넣으면 내구도 20을 회복합니다.

## 게이지 표시 예제

```yaml
# 가득 찼을 때 숨기고, 닳은 뒤에만 표시
"pmdurability:gauge": "damaged"

# 항상 표시
"pmdurability:gauge": "always"

# 표시하지 않음
"pmdurability:gauge": "never"
```

## 자동 관리 키

다음 값은 플러그인이 관리하므로 CraftEngine 설정에서 직접 수정하지 않습니다.

- `pmdurability:current`
- `pmdurability:max`
- `pmdurability:uuid`
- `pmdurability:render_signature`
- `pmdurability:auto_lore_index`
