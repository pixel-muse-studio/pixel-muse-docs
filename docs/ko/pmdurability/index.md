# PMdurability

> CraftEngine 아이템용 커스텀 내구도 연동 플러그인

![Version](https://img.shields.io/badge/version-2.4.0-7C3AED)
![Paper](https://img.shields.io/badge/Paper-1.21.4%2B-06B6D4)
![Verified](https://img.shields.io/badge/verified-26.1.2-22C55E)

## 무엇을 제공하나요?

- CraftEngine `max_damage` 기반 자유로운 최대 내구도
- 인벤토리·GUI 전용 14단계 커스텀 게이지
- 기본 색상과 내구도 구간별 Tint
- 음식, 제작 도구, Shift 제작, 제작대·모루 수리
- Mending, Unbreaking, Unbreakable, 파손 보호
- PlaceholderAPI, Skript, Java 이벤트 API
- 플레이어·상자·엔더 상자·드롭 아이템 분할 동기화

## 호환성

| 구분 | 지원 |
|---|---|
| 서버 | Paper 계열 1.21.4 이상 |
| 검증 환경 | Paper 26.1.2 |
| 필수 | CraftEngine |
| 선택 | PlaceholderAPI, Skript, Nexo |
| F3+H | 별도 정보 추가 안 함 |

## 가장 작은 예제

```yaml
data:
  lore:
    - "<PMdurability>"
  max_damage: 64
  pdc:
    "pmdurability:tint": "#55FFFF"
```

## 다음 단계

1. [설치와 빠른 시작](getting-started)
2. [설정 및 PDC 키](configuration)
3. [완성 예제](examples)
4. [명령어·Placeholder·API](commands-api)
