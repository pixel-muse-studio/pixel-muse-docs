---
name: Pixel Muse Docs
description: 실행 가능한 Minecraft 프로젝트 문서를 위한 어두운 픽셀 포스터와 조용한 읽기 표면의 시각 시스템
colors:
  brand-violet: "#8b46ff"
  brand-violet-hover: "#7632eb"
  brand-violet-deep: "#6325cd"
  poster-accent: "#a99bff"
  poster-canvas: "#24202f"
  floating-chrome: "#15121d"
  floating-field: "#201b2a"
  home-surface: "#1b1724"
  code-surface: "#120b20"
  dark-canvas: "#0d0915"
  dark-surface: "#191127"
  text-strong: "#f7f1ff"
  text-muted: "#c9badc"
  poster-text-muted: "#d8d0e2"
  focus-lilac: "#b3a3ff"
  spark-lime: "#e6f49b"
typography:
  display:
    fontFamily: "Bricolage Grotesque PM, Pretendard, SUIT, sans-serif"
    fontSize: "clamp(58px, 7.3vw, 100px)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.055em"
  section-heading:
    fontFamily: "Pretendard, SUIT, Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(34px, 4vw, 50px)"
    lineHeight: 1.18
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Pretendard, SUIT, Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    lineHeight: 1.75
    letterSpacing: "-0.012em"
  label:
    fontFamily: "Pretendard, SUIT, Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: "0.1em"
rounded:
  field: "12px"
  pager: "14px"
  code: "18px"
  card: "20px"
  nav: "22px"
  feature: "30px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "28px"
  xl: "56px"
  section: "112px"
components:
  hero-action:
    textColor: "{colors.text-strong}"
    rounded: "{rounded.pill}"
    height: "58px"
    padding: "0 28px"
  floating-navigation:
    backgroundColor: "{colors.floating-chrome}"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.nav}"
    height: "62px"
    padding: "0 22px"
  search-field:
    backgroundColor: "{colors.floating-field}"
    textColor: "{colors.poster-text-muted}"
    rounded: "{rounded.field}"
    height: "38px"
  code-window:
    backgroundColor: "{colors.code-surface}"
    rounded: "{rounded.code}"
  home-feature:
    backgroundColor: "{colors.home-surface}"
    rounded: "{rounded.feature}"
---

# Design System: Pixel Muse Docs

## Overview

**Creative North Star: "The Pixel Documentation Poster"**

Pixel Muse Docs는 문서 허브를 카드 모음이 아니라 한 장의 편집 포스터처럼 보이게 한다. 홈은 짙은 보라색 캔버스, 중앙의 초대형 타이포그래피, 문장 안에 삽입된 픽셀 로고, 제한된 장식 기호로 브랜드를 강하게 드러낸다. 픽셀 이미지는 선명하게 유지하고, 인터페이스의 나머지는 현대적인 산세리프와 부드러운 곡률로 받친다.

문서 본문으로 이동하면 표현은 의도적으로 조용해진다. 좌측 탐색, 우측 목차, 검색, 언어 변경이라는 문서 구조를 유지하며, 제목·링크·코드 창에만 보라색 정체성을 집중한다. 이 대비는 실제 설정과 YAML, 명령어, Skript, Java 예제를 빠르게 찾고 복사하는 제품 목적을 따른다.

**Key Characteristics:**

- 어두운 보라색 포스터형 홈과 절제된 읽기 화면의 분리
- 둥근 독립 캡슐처럼 떠 있는 전역 내비게이션
- 강한 중앙 타이포그래피와 문장에 결합된 픽셀 브랜드 자산
- 넓은 구획 간격, 얇은 반투명 경계, 제한된 보라색 강조
- 실행 예제를 독립된 도구 창처럼 보이게 하는 코드 프레임

## Colors

팔레트는 거의 검은 자주색과 먹보라색을 바탕으로, 밝은 라일락을 상호작용과 핵심 문장에 사용한다. 분홍과 연두는 작은 장식에만 등장한다.

### Primary

- **Muse Violet:** 주요 링크, 활성 상태, 문서 강조, 팁 경계에 사용한다.
- **Poster Lilac:** 홈의 강조 문장, CTA 경계, 포커스 링, 내비게이션 호버에 사용한다.

### Secondary

- **Pixel Pink:** 코드 창 상태 점과 기존 브랜드 그라디언트의 보조색이다. 넓은 본문 표면에는 사용하지 않는다.
- **Spark Lime:** 포스터의 작은 별 장식 하나에만 쓰는 희소한 대비색이다.

### Neutral

- **Poster Canvas:** 홈 전체의 고정된 어두운 캔버스다.
- **Floating Chrome:** 전역 내비게이션을 배경에서 분리하는 가장 어두운 표면이다.
- **Quiet Surface:** 홈의 소개 패널과 일반 문서의 보조 표면을 만든다.
- **Strong Text / Muted Text:** 제목과 핵심 정보는 거의 흰색, 설명과 메타데이터는 회보라색으로 계층을 나눈다.

**The Purple Restraint Rule.** 보라색은 링크, 포커스, 핵심 제목 일부와 상호작용 상태에 집중한다. 긴 본문이나 큰 일반 표면 전체를 포화 보라색으로 채우지 않는다.

**The Home/Reading Split Rule.** 홈의 캔버스는 항상 어둡지만 문서 본문은 VitePress 테마 표면을 따른다. 홈의 포스터 배경을 모든 문서 화면에 강제하지 않는다.

## Typography

**Display Font:** Pretendard, SUIT, Inter와 시스템 산세리프 폴백  
**Body Font:** Pretendard, SUIT, Inter와 시스템 산세리프 폴백  
**Code Font:** VitePress의 기본 모노스페이스 스택

**Character:** 하나의 한국어 친화적 산세리프 스택을 전 계층에 사용하고, 크기·굵기·자간의 대비로 포스터와 문서 모드를 구분한다. 굵고 촘촘한 제목은 브랜드의 에너지를 만들고, 넉넉한 본문 행간은 긴 설정 설명의 가독성을 지킨다.

### Hierarchy

- **Poster Display:** 홈의 한 문장형 주제에만 사용한다. 매우 굵고 촘촘하며 두 줄 이하의 균형 잡힌 줄바꿈을 전제로 한다.
- **Section Heading:** 홈 소개 구획의 큰 제목이다. 촘촘한 자간과 균형 줄바꿈을 유지한다.
- **Document Heading:** VitePress 본문 제목은 기본 계층을 유지하되 h1은 850 굵기, h1과 h2는 촘촘한 자간을 쓴다.
- **Body:** 기본 자간은 약간 좁고, 홈의 설명 문장은 1.65–1.75의 넉넉한 행간을 사용한다.
- **Label:** 아이브로, 상태, 코드 툴바는 작고 굵게 쓴다. 아이브로는 넓은 자간을 사용하며 코드 파일명은 대소문자를 보존한다.

**The One Poster Line Rule.** 초대형 디스플레이 서체는 홈의 핵심 문장에만 사용한다. 문서 제목이나 반복 카드 제목에 복제하지 않는다.

## Layout

전역 내비게이션은 뷰포트 가장자리에서 떨어진 플로팅 캡슐이다. 데스크톱에서 좌우 20px 여백, 최대 너비 1500px, 높이 62px를 사용하며 로고·검색·메뉴·언어·테마 기능을 한 줄에 유지한다. 검색은 가능한 공간을 우선 점유하되 최대 540px이며, 768–1080px에서는 사이트 제목 텍스트를 숨겨 탐색 기능을 보존한다.

홈의 주요 콘텐츠 폭은 1180px이다. 첫 화면은 최소 높이 690px의 중앙 정렬 포스터로, 상단 132px의 숨을 두고 제목, 설명, CTA 순서로 쌓는다. 이어지는 세 개의 주요 경로는 카드 대신 하나의 가로 밴드를 3등분하며, 소개 영역은 1.05:0.95, 원칙 영역은 0.92:1.08의 비대칭 2열을 사용한다. 주요 홈 구획 간 기본 간격은 104–112px이다.

문서 화면은 라일락 외곽 프레임 안에 좌측 탐색 패널과 중앙 읽기 캔버스가 들어가는 작업 공간 형태다. 좌측 사이드바, 중앙 읽기 열, 우측 목차 구조를 유지하며, 현재 문서는 밝은 라일락 캡슐로 표시한다. 본문은 하나의 긴 면을 유지하고 표는 읽기 열 너비를 전부 사용한다. 빵부스러기는 작은 캡슐로 본문 제목 앞에 놓인다.

반응형 규칙:

- **959px 이하:** 내비게이션 외곽 여백을 12px로 줄이고 소개·원칙을 단일 열로 전환한다. 포스터 높이와 상단 여백, 이미지 크기도 축소한다.
- **767px 이하:** 내비게이션은 높이 58px, 외곽 여백 8px가 된다. 검색은 40px 아이콘 버튼으로 축약되고 홈 경로 밴드는 세로 목록이 된다.
- **640px 이하:** 포스터 제목은 45–64px 범위, 설명은 16px이 된다. 홈 본문 좌우 여백은 18px, 구획 간격은 76px로 줄며 마스코트 스트립은 세로로 쌓인다.

**The Navigation Survival Rule.** 중간 폭에서는 브랜드 텍스트를 먼저 숨기고 검색, 프로젝트 탐색, 언어 변경을 유지한다.

## Elevation & Depth

깊이는 어두운 톤의 층, 반투명 1px 경계, 넓고 낮은 대비의 그림자를 조합해 만든다. 플로팅 내비게이션은 주변 캔버스에서 확실히 떠 있지만, 일반 문서 표면은 평평하게 유지한다. 홈의 픽셀 이미지는 드롭 섀도로 분리하고, 보라색 방사형 블러는 배경 분위기로만 사용한다.

### Shadow Vocabulary

- **Floating Chrome:** 넓고 얕은 그림자로 내비게이션의 독립된 캡슐 형태를 만든다 (`0 14px 36px rgba(10, 7, 18, .16)`).
- **Home Panel:** 어두운 소개 패널 아래에 큰 확산 그림자를 둔다 (`0 28px 70px rgba(8, 5, 14, .22)`).
- **Code Window:** 코드 예제를 본문의 도구 표면으로 띄운다 (`0 16px 38px rgba(38, 15, 61, .09)`).
- **Interactive Lift:** 기능 카드와 버튼은 호버에서만 1–5px 상승하며 경계 대비를 함께 높인다.

**The Quiet Reading Rule.** 그림자는 홈의 큰 패널, 플로팅 내비게이션, 코드 창과 상호작용 피드백에만 사용한다. 일반 문서 문단과 표를 카드화하지 않는다.

## Shapes

형태 언어는 둥근 현대적 인터페이스와 각진 픽셀 자산의 대비다. 검색 입력은 12px, 문서 페이지 이동은 14px, 코드 창은 18px, 내비게이션은 22px, 큰 홈 패널은 28–30px 곡률을 사용한다. 태그와 주 CTA는 완전한 필 형태다. 경계는 대부분 1px 반투명 보라 또는 흰색이며, CTA만 2px 라일락 경계를 사용한다.

픽셀 로고와 마스코트에는 항상 픽셀 렌더링을 유지한다. 홈의 네 방향 별은 CSS 클립 패스로 만들며, 작은 장식으로만 사용한다.

**The Soft Chrome, Sharp Pixel Rule.** UI 표면은 부드럽게 둥글리고 브랜드 이미지는 선명한 픽셀 가장자리를 보존한다. 픽셀 자산에 블러나 일반 이미지 보간을 적용하지 않는다.

## Components

### Floating Navigation

- **Shape:** 화면 가장자리에서 분리된 22px 곡률의 어두운 캡슐이다.
- **Content:** 픽셀 로고, 사이트명, 넓은 검색, 프로젝트 메뉴, 언어, 테마 순서를 유지한다.
- **Search:** 더 밝은 어두운 표면과 얇은 흰색 경계를 사용하며 호버에서 라일락 경계를 강화한다.
- **Responsive:** 모바일에서는 높이와 여백을 줄이고 검색을 아이콘 버튼으로 축약한다.

### Poster Hero

- **Composition:** 중앙 정렬된 초대형 문장 안에 픽셀 로고를 글자처럼 삽입하고, 마지막 행만 라일락으로 강조한다.
- **Supporting Copy:** 최대 740px의 설명을 충분한 상단 여백과 함께 배치한다.
- **Decoration:** 좌우 별 두 개와 매우 약한 중앙 라일락 광원만 허용한다. 별은 모바일에서 숨긴다.
- **Action:** 58px 높이의 투명한 필 버튼에 2px 라일락 경계를 사용한다. 호버 시 라일락으로 채우고 2px 상승시키며 화살표를 4px 이동한다.

### Home Path Band

- **Structure:** 하나의 가로 밴드를 세 등분하고 바깥쪽에는 위·아래 경계만 둔다.
- **Content:** 각 항목은 굵은 목적명과 작은 설명 한 줄로 구성한다.
- **State:** 호버 시 라일락이 아주 옅게 깔린다. 모바일에서는 세로 목록과 가로 구분선으로 바뀐다.

### Home Panels

- **Intro:** 어두운 단색 표면, 30px 곡률, 얇은 밝은 경계와 깊은 확산 그림자를 사용한다. 설명과 실제 YAML 창을 2열로 배치한다.
- **Principles:** 별도 카드 없이 넓은 여백과 수평 구분선으로 원칙을 나열한다.
- **Mascot Strip:** 거의 검은 보라 표면과 얇은 경계 안에 픽셀 마스코트와 짧은 브랜드 문장을 배치한다. 그림자는 사용하지 않는다.

### Code Windows

- **Surface:** 진한 자주색 배경, 18px 곡률, 반투명 보라 경계의 독립 창이다.
- **Toolbar:** 최소 높이 42px이며, 왼쪽에는 세 개의 8px 상태 점, 오른쪽에는 언어 또는 파일명을 둔다.
- **Code:** 툴바 아래 코드는 같은 배경을 이어 쓰고 위 20px, 아래 22px의 여백을 둔다. 중첩된 기본 코드 테두리와 언어 배지는 제거한다.
- **Purpose:** YAML, Skript, Java 등 복사 가능한 실행 예제를 본문 설명보다 빠르게 식별하게 한다.

### Reading Navigation

- **Workspace Frame:** 데스크톱 문서 화면은 라일락 외곽 프레임을 사용한다. 모바일에서는 프레임을 제거하고 읽기 폭을 확보한다.
- **Breadcrumbs:** 13px의 절제된 메타 텍스트를 어두운 작은 캡슐 안에 두고 현재 위치만 브랜드 보라로 강조한다.
- **Sidebar:** 독립된 먹보라 패널이며 최상위 항목은 800 굵기다. 현재 문서는 라일락 캡슐과 어두운 글자로 명확히 표시한다.
- **Outline:** 우측 목차는 본문보다 한 단계 밝은 작은 보조 패널로 묶는다.
- **Previous / Next:** 최소 높이 92px, 14px 곡률의 낮은 대비 표면이다. 호버에서 브랜드 경계와 2px 상승을 사용한다.
- **Search Modal:** 18px 곡률의 셸과 50px 입력을 사용한다. 최근 검색은 작은 라벨과 9px 곡률의 칩으로 표시한다.

## Do's and Don'ts

### Do:

- **Do** 홈에서 픽셀 로고와 마스코트를 실제 브랜드 자산으로 사용하고 픽셀 렌더링을 보존한다.
- **Do** 문서 본문에서는 제목, 링크, 코드 예제, 탐색 상태에만 브랜드 표현을 집중한다.
- **Do** 설정 키, 명령어, 코드, 플러그인명은 모노스페이스 또는 코드 표면에서 원문 그대로 표시한다.
- **Do** 검색, 프로젝트 탐색, 언어 변경, 좌측 사이드바와 우측 목차를 핵심 구조로 유지한다.
- **Do** 모든 키보드 포커스에 3px 라일락 외곽선과 3px 오프셋을 제공한다.
- **Do** `prefers-reduced-motion`에서 전환과 애니메이션 시간을 사실상 제거하고 자동 스크롤 동작을 끈다.

### Don't:

- **Don't** 고객 수, 최초·유일 같은 검증되지 않은 상업적 주장을 시각적 배지나 카피로 추가하지 않는다.
- **Don't** 일반 문서 문단을 반복적인 둥근 카드로 감싸 포스터 홈의 표현 밀도를 본문에 복제하지 않는다.
- **Don't** 큰 장식 그라디언트, 과도한 글로우, 다수의 별 모티프를 추가하지 않는다.
- **Don't** 좁은 화면에서 검색과 언어 변경을 제거하지 않는다. 공간이 부족하면 제목과 장식을 먼저 축약한다.
- **Don't** 장식 모션을 상시 반복하지 않는다. 구현된 움직임은 호버의 짧은 상승과 화살표 이동뿐이다.
