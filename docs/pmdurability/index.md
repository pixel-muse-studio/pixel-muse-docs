# PMdurability

> Custom durability integration for CraftEngine items.

![Version](https://img.shields.io/badge/version-2.4.0-7C3AED)
![Paper](https://img.shields.io/badge/Paper-1.21.4%2B-06B6D4)
![Verified](https://img.shields.io/badge/verified-26.1.2-22C55E)

## Features

- Any maximum durability value through CraftEngine `max_damage`
- A 14-step custom gauge visible in inventories and GUIs
- Base and durability-range tint colors
- Food, crafting tools, shift crafting, crafting-table and anvil repairs
- Mending, Unbreaking, Unbreakable, and break protection
- PlaceholderAPI, Skript, and Java events
- Distributed synchronization for players, containers, ender chests, and dropped items

## Compatibility

| Type | Support |
|---|---|
| Server | Paper-based servers 1.21.4+ |
| Verified | Paper 26.1.2 |
| Required | CraftEngine |
| Optional | PlaceholderAPI, Skript, Nexo |
| F3+H | No extra information is injected |

## Minimal example

```yaml
data:
  lore:
    - "<PMdurability>"
  max_damage: 64
  pdc:
    "pmdurability:tint": "#55FFFF"
```

## Next steps

1. [Install and start](getting-started)
2. [Configuration and PDC keys](configuration)
3. [Complete examples](examples)
4. [Commands, placeholders, and API](commands-api)
