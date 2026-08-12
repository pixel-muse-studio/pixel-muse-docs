# Configuration

## Global configuration

`plugins/PMdurability/config.yml`

```yaml
lore: "<!i><gray>Durability: {current} / {max}"
gauge-default: damaged
repair-material-default-percent: 25

anvil:
  combine-bonus-percent: 5
  merge-enchantments: highest
  keep-custom-name: first
  component-source: first

sync-chunks-per-tick: 4
```

## CraftEngine PDC keys

PDC stores plugin-specific data inside an item.

| Key | Format | Purpose |
|---|---|---|
| `pmdurability:tint` | HEX | Base gauge color |
| `pmdurability:tint_30/15` | HEX | Color from 30% through 15% remaining |
| `pmdurability:gauge` | string | `damaged`, `always`, or `never` |
| `pmdurability:craft_damage` | integer | Durability consumed per craft |
| `pmdurability:repair_material` | string | Comma-separated anvil repair material IDs |
| `pmdurability:repair_amount` | integer | Durability restored per material |
| `pmdurability:break_protection` | 1/0 | Keep one durability instead of breaking |
| `pmdurability:unbreakable` | 1/0 | Block every durability decrease |

## Range tint example

```yaml
pdc:
  "pmdurability:tint": "#55FFFF"
  "pmdurability:tint_30/15": "#FFB020"
  "pmdurability:tint_15/0": "#FF3636"
```

Range colors override the base tint while the remaining percentage is inside the range.

## Repair material example

```yaml
pdc:
  "pmdurability:repair_material": "minecraft:iron_ingot, pm_material:steel"
  "pmdurability:repair_amount": 20
```

## Gauge visibility

```yaml
"pmdurability:gauge": "damaged" # hide at full durability
"pmdurability:gauge": "always"  # always show
"pmdurability:gauge": "never"   # never show
```

## Plugin-managed keys

Do not edit `current`, `max`, `uuid`, `render_signature`, or `auto_lore_index` manually.
