---
layout: home

hero:
  name: Pixel Muse Studio
  text: 프로젝트 공식 문서
  tagline: 설정부터 연동 API까지, 실제로 복사해 사용할 수 있는 예제 중심 가이드입니다.
  actions:
    - theme: brand
      text: PMdurability 시작하기
      link: /pmdurability/getting-started
    - theme: alt
      text: 프로젝트 둘러보기
      link: /projects/

features:
  - icon: 🧩
    title: 프로젝트별 문서
    details: 각 플러그인의 설치, 설정, 예제와 API를 독립된 카테고리로 제공합니다.
  - icon: 📋
    title: 복사 가능한 예제
    details: 모든 주요 기능에 바로 적용할 수 있는 YAML, 명령어 또는 코드 예제가 포함됩니다.
  - icon: 🔎
    title: 빠른 검색
    details: 우측 상단 검색으로 설정 키와 기능 이름을 문서 전체에서 찾을 수 있습니다.
  - icon: 🌙
    title: 읽기 편한 화면
    details: 모바일 탐색, 다크 모드, 페이지 목차와 이전·다음 문서를 지원합니다.
---

## 빠른 예제

CraftEngine 아이템에 커스텀 내구도를 연결하는 최소 설정입니다.

```yaml
items:
  pm_durability:bright_blue_wooden_sword:
    material: wooden_sword
    item_model: pm_durability:bright_blue_wooden_sword
    data:
      item_name: "<!i><#55FFFF>밝은 블루 나무 검"
      max_damage: 100
      pdc:
        "pmdurability:tint": "#55FFFF"
```

[설정 전체 설명 보기 →](/pmdurability/configuration)
