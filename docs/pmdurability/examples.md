# Complete examples

## Colored durability item

```yaml
items:
  pm_durability:bright_blue_wooden_sword:
    material: wooden_sword
    item_model: pm_durability:bright_blue_wooden_sword
    data:
      item_name: "<!i><#55FFFF>Bright Blue Wooden Sword"
      lore:
        - "<gray>A lightweight test weapon"
        - "<PMdurability>"
      max_damage: 100
      pdc:
        "pmdurability:tint": "#55FFFF"
        "pmdurability:gauge": "damaged"
```

## Food with three uses

```yaml
items:
  pm_durability:red_beef:
    material: beef
    data:
      item_name: "<!i><#FF3636>Three-bite Beef"
      lore:
        - "<PMdurability>"
      max_damage: 3
      pdc:
        "pmdurability:tint": "#FF3636"
```

The item remains after eating until its custom durability reaches zero.

## Crafting tool

```yaml
items:
  pm_durability:cooking_knife:
    material: iron_sword
    data:
      item_name: "<!i><gray>Cooking Knife"
      lore:
        - "<PMdurability>"
      max_damage: 64
      pdc:
        "pmdurability:tint": "#A9A9A9"
        "pmdurability:craft_damage": 1
```

Shift crafting consumes durability once per actual craft and emits one tool-use event per craft.

## Break protection

```yaml
pdc:
  "pmdurability:break_protection": 1
```

The item stops at one durability instead of breaking.
