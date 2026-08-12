# 🚀 PMdurability 시작하기

## 설치

1. `PMdurability.jar`를 서버의 `plugins` 폴더에 넣습니다.
2. CraftEngine과 내구도 리소스를 설치합니다.
3. 서버를 완전히 재시작합니다.
4. CraftEngine 리소스 팩을 빌드·배포합니다.
5. 설정 변경 후 `/pmdurability reload`를 실행합니다.

```text
plugins/
├─ PMdurability.jar
├─ PMdurability/config.yml
└─ CraftEngine/resources/
   ├─ new_durability/
   └─ pm_durability/
```

## 첫 아이템

```yaml
items:
  pm_durability:starter_sword:
    material: wooden_sword
    hand_animation_on_swap: false
    item_model: new_durability:wooden_sword_tinted
    data:
      item_name: "<!i><#55FFFF>시작용 검"
      lore:
        - "<gray>내 첫 커스텀 내구도 아이템"
        - "<PMdurability>"
      max_damage: 100
      pdc:
        "pmdurability:tint": "#55FFFF"
        "pmdurability:gauge": "damaged"
```

## 확인

아이템을 주 손에 들고 실행합니다.

```text
/pmdurability inspect
```

정상 예시:

```text
아이템 ID: pm_durability:starter_sword
현재 내구도: 100
최대 내구도: 100
사용률: 100.00%
Tint: #55FFFF
UUID: ...
```

> `<PMdurability>`는 실제 로어로 교체됩니다. 새 아이템에는 `pmdurability:enabled`와 `pmdurability:item_id`가 필요하지 않습니다.
