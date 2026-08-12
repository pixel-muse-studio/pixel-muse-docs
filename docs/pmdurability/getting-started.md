# Install and start

## Requirements

- A Paper-based server supported by the plugin
- CraftEngine
- The matching PMdurability build
- The PMdurability resource pack inside CraftEngine resources

Optional integrations: PlaceholderAPI, Skript, and Nexo.

## Installation

1. Put `PMdurability.jar` in `plugins/`.
2. Keep the durability resources inside CraftEngine's resource directory.
3. Start the server once.
4. Check that PMdurability and CraftEngine are enabled.

```text
plugins/
├─ CraftEngine/
└─ PMdurability.jar
```

## First item

Use CraftEngine's `max_damage` as the maximum durability. PMdurability detects compatible CraftEngine items automatically.

```yaml
items:
  pm_durability:bright_blue_wooden_sword:
    material: wooden_sword
    item_model: pm_durability:bright_blue_wooden_sword
    data:
      item_name: "<!i><#55FFFF>Bright Blue Wooden Sword"
      lore:
        - "<PMdurability>"
      max_damage: 100
      pdc:
        "pmdurability:tint": "#55FFFF"
```

`<PMdurability>` is replaced with the durability lore at that exact position.

## Reload

```text
/pmdurability reload
```

The reload refreshes configuration and synchronizes managed items.
