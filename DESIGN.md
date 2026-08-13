---
name: Pixel Muse Docs
description: Minecraft 프로젝트 문서를 위한 Nanitabs 기반의 어두운 크리에이터 도구 워크스페이스
colors:
  canvas: "#171724"
  canvas-deep: "#10101a"
  global-bar: "#14141f"
  panel: "#202031"
  panel-raised: "#292842"
  reading-surface: "#1b1b29"
  field: "#34324f"
  accent: "#9d9af6"
  accent-strong: "#bbb3ff"
  pink: "#e598df"
  cream: "#f7e4c9"
  lime: "#e9ff9c"
  text: "#faf8ff"
  text-secondary: "#cdc8dc"
  text-tertiary: "#9993ab"
  line: "rgba(205, 197, 255, .14)"
typography:
  display:
    fontFamily: "Bricolage Grotesque PM, Pretendard, sans-serif"
    fontSize: "clamp(54px, 7vw, 92px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  document-title:
    fontFamily: "Pretendard, SUIT, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(34px, 4vw, 48px)"
    fontWeight: 850
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Pretendard, SUIT, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.75
  label:
    fontFamily: "Pretendard, SUIT, Segoe UI, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 800
rounded:
  notch: "7px"
  compact: "16px"
  code: "22px 22px 8px 22px"
  card: "22px 22px 7px 22px"
  panel: "34px 34px 10px 34px"
  reading: "38px 38px 14px 38px"
  hero: "42px 42px 14px 42px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "22px"
  lg: "24px"
  xl: "40px"
  section: "96px"
components:
  global-bar:
    backgroundColor: "{colors.global-bar}"
    textColor: "{colors.text}"
    rounded: "28px"
    height: "64px"
    padding: "0 22px"
  global-search:
    backgroundColor: "#29283b"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.compact}"
    height: "42px"
  active-nav-item:
    backgroundColor: "{colors.accent}"
    textColor: "#1a1927"
    rounded: "15px"
    height: "46px"
    padding: "11px 14px"
  hero-action:
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 27px"
  code-window:
    backgroundColor: "{colors.canvas-deep}"
    rounded: "{rounded.code}"
---

# Design System: Pixel Muse Docs

## Overview

**Creative North Star: "The Creator Documentation Workbench"**

Pixel Muse Docs는 Nanitabs에서 영감을 받은 크리에이터 도구 워크스페이스다. 홈과 문서 화면 모두 짙은 남색 캔버스 위에 먹색 전역 바, 비대칭으로 둥근 작업 패널, 라일락 활성 상태를 사용한다. 홈만 별도의 마케팅 테마로 취급하지 않고, 탐색에서 읽기와 예제 복사까지 하나의 제품 UI 안에서 이어지게 한다.

정보 구조는 문서 도구의 기능을 우선한다. 넓은 검색, 프로젝트 탐색, 언어 변경, 좌측 문서 탐색, 중앙 읽기 표면, 우측 목차를 유지한다. 브랜드는 픽셀 로고와 마스코트, 라일락 레일과 활성 캡슐로 표현하며, 검증된 설정과 실제 예제를 찾는 흐름을 방해하는 장식은 추가하지 않는다.

**Key Characteristics:**

- 홈과 문서를 통합하는 어두운 남색 작업공간
- 화면 가장자리에서 떠 있는 근검은색 전역 제품 바와 넓은 검색 필드
- 좌측 프로젝트 탐색, 중앙 읽기 표면, 우측 목차의 데스크톱 3영역 구조
- 큰 곡률과 한쪽 작은 모서리를 조합한 비대칭 패널
- 패널 상단의 짧은 라일락 또는 라일락–핑크 노치 레일
- 라일락 활성 캡슐, 선명한 픽셀 자산, 실제 코드 창

## Colors

기본 팔레트는 남색에 가까운 저채도 보라 중성색이다. 라일락은 선택과 포커스를, 핑크·크림·라임은 매우 제한된 브랜드 디테일을 담당한다.

### Primary

- **Workspace Lilac:** 활성 문서, 주요 경계, CTA, 포커스, 링크에 사용한다.
- **Bright Lilac:** 링크와 목차 활성 상태처럼 작은 텍스트 강조에 사용한다.

### Secondary

- **Maker Pink:** 읽기 표면의 상단 노치 그라디언트와 코드 창 상태 점에만 사용한다.
- **Spark Lime:** 홈의 작은 별 장식에 한정한다.
- **Warm Cream:** 구현 토큰으로 보존하되 현재 넓은 표면이나 주요 상호작용에는 사용하지 않는다.

### Neutral

- **Deep Canvas:** 페이지 바깥과 가장 깊은 배경이다.
- **Workspace Canvas:** 홈과 문서가 공유하는 주 캔버스다.
- **Near-black Chrome:** 전역 제품 바와 코드 창처럼 가장 집중도가 높은 도구 표면이다.
- **Panel / Raised Panel:** 탐색, 소개, 목차, 호버 상태의 층을 만든다.
- **Primary / Secondary / Tertiary Text:** 흰색에 가까운 제목, 회보라 본문, 낮은 대비의 메타 정보 순으로 계층화한다.

**The No Lavender Frame Rule.** 라일락은 화면 외곽 프레임이나 대형 배경이 아니다. 활성 캡슐, 짧은 레일, 링크, 포커스처럼 의미 있는 상태에만 사용한다.

**The One Workspace Rule.** 홈과 문서의 캔버스·패널·필드·활성색은 동일한 토큰을 사용한다.

## Typography

**Display Font:** Bricolage Grotesque PM 800, Pretendard 폴백  
**Body Font:** Pretendard, SUIT, Segoe UI, system-ui  
**Code Font:** VitePress 모노스페이스 스택

**Character:** 홈의 영문 디스플레이는 굵고 압축된 Bricolage Grotesque로 도구 브랜드의 개성을 만든다. 한국어와 문서 본문은 Pretendard 중심의 산세리프로 안정적인 가독성을 유지한다.

### Hierarchy

- **Home Display:** 54–92px, 800 굵기, 0.98 행간으로 홈의 핵심 문장에만 사용한다.
- **Document Title:** 34–48px, 850 굵기이며 앞에 픽셀 로고를 인라인 표식으로 둔다.
- **Section Heading:** h2는 28px, h3는 21px이며 850 굵기와 촘촘한 자간을 공유한다.
- **Body:** 데스크톱 16px, 1.75 행간이다. 모바일에서는 15px로 축소한다.
- **Utility Label:** 11–12px, 700–800 굵기로 사이드바 헤더, 빵부스러기, 코드 툴바, 페이지 이동 설명에 사용한다.

**The Tool Before Poster Rule.** 디스플레이 서체는 홈의 영문 핵심 문장에만 사용한다. 탐색과 긴 한국어 문서에는 본문 서체를 유지한다.

## Layout

전역 제품 바는 상단 16px에서 시작하며 좌우 20px 여백, 최대 너비 1540px, 높이 64px다. 검색은 420px의 유연한 기준 폭과 최대 620px를 갖고, 로고·프로젝트 메뉴·언어·테마 기능과 한 줄에 배치된다.

960px 이상 문서 화면은 좌측 256px 프로젝트 탐색 패널, 중앙 읽기 표면, 우측 목차로 구성된다. 콘텐츠는 상단 110px, 좌우 24px의 작업공간 여백을 갖는다. 중앙 패널 내부의 실제 읽기 폭은 최대 760px이고 전체 컨테이너는 최대 1280px다. 우측 목차는 중앙 패널 안에서 별도 상승 표면으로 묶인다.

홈 콘텐츠는 최대 1240px이다. 히어로는 중앙 포스터가 아니라 좌측 정렬된 620px 높이의 작업 패널이며, 오른쪽 34%에 불규칙한 라일락 레일 면이 들어간다. 주요 경로는 3열 도구 카드, 프로젝트 소개는 1:1, 원칙은 0.9:1.1의 비대칭 2열이다. 주요 섹션 간격은 96px이다.

반응형 규칙:

- **1100px 이하:** 사이트명 텍스트를 숨기고 검색 최대 폭을 430px로 줄인다. 히어로 우측 레일의 폭과 불투명도를 낮춘다.
- **959px 이하:** 전역 바 외곽 여백을 12px로 줄인다. 데스크톱 작업 패널 배치를 해제하고 소개·원칙을 단일 열로 만든다.
- **767px 이하:** 전역 바는 상단 8px, 좌우 8px, 높이 58px이 된다. 검색은 42px 아이콘 버튼으로 축약된다. 문서 외곽 곡률은 제거하고 홈 경로 카드는 단일 열이 된다.
- **모바일 홈:** 히어로는 560px 높이와 24px 좌우 패딩을 사용한다. 라일락 레일은 우측 세로 면에서 하단 30%의 톱니형 면으로 변하고 별 장식은 숨긴다.

**The Navigation Survival Rule.** 좁은 화면에서는 사이트명과 장식을 먼저 줄이고 검색, 프로젝트 탐색, 언어 변경을 유지한다.

## Elevation & Depth

깊이는 캔버스와 패널의 명도 차이, 반투명 1px 경계, 넓고 어두운 그림자로 만든다. 모든 요소를 띄우지 않고, 전역 바와 주요 작업 패널·검색 모달·코드 창에만 구조적 그림자를 사용한다. 내부 표면은 미세한 인셋 하이라이트로 재질을 구분한다.

### Shadow Vocabulary

- **Workspace Panel:** 좌측 탐색과 중앙 읽기 표면에 사용한다 (`0 24px 64px rgba(3, 3, 10, .28)`).
- **Global Bar:** 근검은 제품 바를 캔버스에서 분리한다 (`0 18px 48px rgba(4, 4, 11, .28)`).
- **Code Window:** 실제 예제를 독립된 도구 창으로 보이게 한다 (`0 18px 46px rgba(4, 3, 10, .25)`).
- **Search Modal:** 집중 작업을 위해 가장 깊은 그림자를 사용한다 (`0 32px 92px rgba(3, 3, 9, .5)`).

**The Structural Shadow Rule.** 그림자는 화면 계층을 설명해야 한다. 일반 문단, 목록, 표의 각 행에는 그림자를 사용하지 않는다.

## Shapes

기본 형태는 큰 곡률의 작업 패널과 작은 절단 모서리를 결합한 비대칭 실루엣이다. 좌측 탐색은 `34px 34px 14px 34px`, 중앙 읽기는 `38px 38px 14px 38px`, 홈 히어로는 `42px 42px 14px 42px`이다. 카드·코드·페이지 이동은 우하단만 7–8px로 줄여 같은 계보를 유지한다.

활성 탐색과 태그, 빵부스러기, CTA는 완전한 캡슐이다. 주요 작업 패널 상단에는 짧은 8–10px 높이의 노치 레일을 붙인다. 픽셀 로고와 마스코트는 이미지 보간 없이 선명하게 렌더링한다.

**The Asymmetric Corner Rule.** 큰 패널과 도구 카드는 우하단 곡률을 더 작게 유지한다. 모든 표면을 동일한 대칭 라운드 카드로 만들지 않는다.

## Components

### Global Product Bar

- **Shape:** 28px 곡률, 64px 높이의 근검은 플로팅 바다.
- **Contents:** 픽셀 로고와 사이트명, 폭넓은 검색, 프로젝트 메뉴, 언어, 테마 순서를 유지한다.
- **Search:** 42px 높이, 16px 곡률의 넓은 필드다. 호버에서 배경과 라일락 경계 대비만 높인다.
- **Responsive:** 중간 폭에서는 사이트명을 숨기고 모바일에서는 검색을 정사각 아이콘으로 축약한다.

### Project Navigation

- **Panel:** 데스크톱에서 독립된 256px 먹보라 패널이며 상단에 `Pixel Muse` 라벨과 86×8px 라일락 레일을 둔다.
- **Items:** 항목은 최소 46px 높이와 15px 곡률이다. 호버 시 2px 오른쪽으로 이동한다.
- **Active:** 라일락으로 완전히 채우고 어두운 글자를 사용해 선택 상태를 명확히 한다.

### Reading Surface

- **Panel:** 하나의 긴 중앙 작업 표면이며 상단에 190×10px 라일락–핑크 레일이 있다.
- **Title:** 픽셀 로고가 제목 앞의 제품 표식으로 나타난다.
- **Outline:** 우측 목차는 `26px 26px 9px 26px` 곡률의 상승 패널이다. 활성 링크만 밝은 라일락이다.
- **Content:** h2는 58px 위 간격과 얇은 구분선, h3는 38px 위 간격을 사용한다. 앵커는 제목 호버나 키보드 포커스에서만 나타난다.
- **Supporting Surfaces:** 빵부스러기는 필 캡슐, 인용문·사용자 블록·표는 비대칭 저대비 표면이다.

### Code Window

- **Shape:** `22px 22px 8px 22px` 곡률과 라일락 반투명 경계를 사용한다.
- **Toolbar:** 48px 높이의 어두운 바에 핑크·라일락·회보라 상태 점과 파일명 또는 언어명을 둔다.
- **Code:** 동일한 근검은 표면을 이어 쓰며 상하 22–24px 여백을 둔다. 기본 언어 배지와 중첩 테두리는 제거한다.
- **Purpose:** YAML, 명령어, Skript, Java처럼 복사 가능한 실제 예제를 즉시 식별하게 한다.

### Home Workspace

- **Hero:** 좌측 정렬된 대형 문장과 설명, CTA를 한 작업 패널 안에 둔다. 오른쪽은 불규칙한 라일락 레일 면이며 픽셀 로고가 문장 안에 들어간다.
- **Path Cards:** 세 개의 비대칭 도구 카드로 프로젝트, 예제, 검색 진입점을 제공한다.
- **Project Panel:** 설명과 실제 YAML 코드 창을 1:1로 배치한다.
- **Principles:** 카드 반복 대신 구분선 목록으로 설정→예제→연동 흐름을 설명한다.
- **Mascot Panel:** 동일한 패널 재질 안에서 픽셀 마스코트와 짧은 브랜드 문장을 결합한다.

### Search Panel

- **Shell:** `28px 28px 10px 28px` 곡률의 도구 모달이며 어두운 백드롭 위에 뜬다.
- **Input:** 최소 54px 높이, 16px 곡률의 넓은 필드다.
- **History:** 최근 검색어는 작은 라벨 아래 라일락 계열 필 칩으로 최대 3개 표시한다.

## Do's and Don'ts

### Do:

- **Do** 홈과 문서에 같은 캔버스, 패널, 비대칭 곡률, 라일락 활성 상태를 사용한다.
- **Do** 검색, 프로젝트 탐색, 언어 변경, 좌측 탐색과 우측 목차를 제품 구조로 유지한다.
- **Do** 실제 설정과 완성 예제를 코드 창으로 우선 노출하고 설정 키·명령어·플러그인명은 번역하지 않는다.
- **Do** 픽셀 로고와 마스코트에 `image-rendering: pixelated`를 유지한다.
- **Do** 키보드 포커스에 3px 밝은 라일락 외곽선과 3px 오프셋을 제공한다.
- **Do** `prefers-reduced-motion`에서 부드러운 스크롤을 끄고 애니메이션·전환 시간을 사실상 제거한다.

### Don't:

- **Don't** 홈을 별도의 포스터 테마로 만들거나 문서 화면을 기본 VitePress 외형으로 되돌리지 않는다.
- **Don't** 화면 전체를 감싸는 라벤더 외곽 프레임이나 넓은 라일락 배경을 추가하지 않는다.
- **Don't** 모든 표면을 대칭 라운드 카드로 만들지 않는다. 노치 레일과 작은 우하단 모서리를 유지한다.
- **Don't** 좁은 화면에서 핵심 탐색 기능을 제거하지 않는다. 사이트명과 장식을 먼저 축약한다.
- **Don't** 고객 수, 최초·유일 등 검증되지 않은 제품 주장을 배지나 카피로 추가하지 않는다.
- **Don't** 지속적으로 반복되는 장식 모션을 추가하지 않는다. 구현된 움직임은 짧은 호버 이동과 상태 전환뿐이다.
