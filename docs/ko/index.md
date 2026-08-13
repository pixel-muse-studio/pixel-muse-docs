---
layout: home
pageClass: pixel-muse-home
---

<!--
THESIS: 문서 허브를 평범한 카드형 랜딩이 아니라 크리에이터 도구의 타이포그래피 포스터로 만든다.
OWN-WORLD: 먹보라 캔버스, 흰색 대형 활자, 라일락 포인트, 픽셀 로고, 둥근 캡슐형 인터페이스.
STORY: 방문자는 Pixel Muse 프로젝트의 설정과 예제를 바로 찾고 PMdurability 문서로 이동한다.
FIRST VIEWPORT: 중앙 대형 문장 안에 픽셀 로고가 놓이고, 설명과 프로젝트 버튼, 탐색 밴드가 아래에 이어진다.
FORM: 사용자가 지정한 Nanitabs 레퍼런스 기반의 중앙 포스터형 문서 홈.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->

<section class="pm-poster-hero">
  <svg class="pm-goo-filter" aria-hidden="true" focusable="false">
    <defs>
      <filter id="pm-goo" x="-30%" y="-30%" width="160%" height="160%" color-interpolation-filters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12" />
      </filter>
    </defs>
  </svg>
  <span class="pm-goo-field" aria-hidden="true">
    <i class="pm-goo-blob pm-goo-blob--one"></i>
    <i class="pm-goo-blob pm-goo-blob--two"></i>
    <i class="pm-goo-blob pm-goo-blob--three"></i>
  </span>
  <span class="pm-spark pm-spark--left" aria-hidden="true"></span>
  <span class="pm-spark pm-spark--right" aria-hidden="true"></span>
  <h1><a href="https://mcmodels.net/vendors/284/pixel-muse-studio">Pixel Muse Studio</a></h1>
  <p>Minecraft 프로젝트 설정부터 연동 API까지 한곳에 정리했습니다.<br>필요한 예제를 복사해 바로 적용하고 테스트해 보세요.</p>
  <a class="pm-hero-action" href="./projects/">프로젝트 보기 <span aria-hidden="true">→</span></a>
</section>

<nav class="pm-home-paths" aria-label="문서 주요 기능">
  <a href="./projects/"><b>프로젝트 가이드</b><span>설치부터 API 연동까지</span></a>
  <a href="./pmdurability/examples"><b>바로 쓰는 예제</b><span>YAML · Skript · Java</span></a>
  <button class="pm-search-trigger" type="button"><b>문서 검색</b><span>설정 키와 기능 찾기</span></button>
</nav>

<section class="brand-intro">
  <div class="brand-intro__copy">
    <h2>PMdurability</h2>
    <p>CraftEngine 아이템에 원하는 최대 내구도와 픽셀 게이지를 적용합니다. 음식과 제작 도구부터 수리, 인챈트, 외부 플러그인 연동까지 한곳에서 관리할 수 있습니다.</p>
    <div class="brand-tags">
      <span>CraftEngine</span><span>Paper</span><span>PlaceholderAPI</span><span>Skript</span>
    </div>
    <a class="brand-link" href="./pmdurability/">PMdurability 문서 열기 <span>→</span></a>
  </div>
  <div class="brand-intro__code">

```yaml [item.yml]
data:
  lore:
    - "<PMdurability>"
  max_damage: 100
  pdc:
    "pmdurability:tint": "#9B5CFF"
```

  </div>
</section>

<section class="brand-principles">
  <div>
    <h2>설명을 읽고 바로 적용할 수 있는 문서</h2>
  </div>
  <ol>
    <li><span><b>설정 확인</b> 필요한 키와 기본값을 먼저 살펴봅니다.</span></li>
    <li><span><b>예제 적용</b> 완성된 구성을 복사해 빠르게 테스트합니다.</span></li>
    <li><span><b>기능 연동</b> 명령어와 이벤트를 외부 플러그인에 연결합니다.</span></li>
  </ol>
</section>

<section class="mascot-strip">
  <img src="/brand/pmstudio-mascots.png" alt="Pixel Muse Studio pixel mascots">
  <div><strong>Pixel Muse Studio</strong><span>작은 아이디어를 오래 쓰이는 시스템으로 만듭니다.</span></div>
</section>
