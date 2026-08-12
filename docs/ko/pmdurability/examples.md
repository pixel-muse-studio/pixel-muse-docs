# 🧪 PMdurability 완성 예제

## 단계별 색상 검

```yaml
items:
  pm_durability:status_sword:
    material: iron_sword
    item_model: new_durability:iron_sword_tinted
    data:
      item_name: "<!i><#55FFFF>상태 표시 검"
      lore:
        - "<gray>내구도에 따라 색상이 바뀝니다"
        - "<PMdurability>"
      max_damage: 100
      pdc:
        "pmdurability:tint": "#55FFFF"
        "pmdurability:tint_30/15": "#FFB020"
        "pmdurability:tint_15/0": "#FF3636"
        "pmdurability:gauge": "damaged"
```

## 내구도 음식

```yaml
items:
  pm_durability:red_beef:
    material: beef
    hand_animation_on_swap: false
    item_model: new_durability:beef_tinted
    data:
      item_name: "<!i><#FF3636>붉은 내구도 소고기"
      lore:
        - "<PMdurability>"
      components:
        minecraft:max_stack_size: 1
      max_damage: 3
      pdc:
        "pmdurability:tint": "#FF3636"
```

한 번 먹을 때 내구도가 1 감소하고, 마지막 내구도를 사용하면 아이템이 사라집니다.

## 제작 도구와 레시피

```yaml
items:
  pm_durability:cooking_knife:
    material: iron_sword
    item_model: new_durability:iron_sword_tinted
    data:
      item_name: "<!i><#B0B0B0>요리용 철칼"
      lore:
        - "<PMdurability>"
      max_damage: 64
      pdc:
        "pmdurability:tint": "#808080"
        "pmdurability:craft_damage": 1
        "pmdurability:repair_material": "minecraft:iron_ingot"
        "pmdurability:repair_amount": 16
    settings:
      craft_remainder:
        type: hurt_and_break
        damage: 0

recipes:
  pm_durability:cooked_beef_with_knife:
    type: shapeless
    ingredients:
      - pm_durability:cooking_knife
      - minecraft:beef
    result:
      id: minecraft:cooked_beef
      count: 1
```

Shift 제작은 재료·인벤토리 공간·도구 내구도 범위 안에서 최대 횟수를 제작합니다.

## 파손 방지 도구

```yaml
pdc:
  "pmdurability:tint": "#A855F7"
  "pmdurability:break_protection": 1
```

내구도가 0이 될 상황에서 아이템이 사라지지 않고 1로 남습니다.
