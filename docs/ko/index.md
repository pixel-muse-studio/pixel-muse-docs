---
layout: home
pageClass: pixel-muse-home

hero:
  name: Pixel Muse Studio
  text: 상상을 플레이 가능한 세계로
  tagline: Minecraft 프로젝트의 설정부터 연동 API까지. 실제 서버에서 바로 사용할 수 있는 예제 중심 공식 문서입니다.
  image:
    src: /brand/pixel-muse-icon-1000.png
    alt: Pixel Muse Studio pixel logo
  actions:
    - theme: brand
      text: 문서 시작하기
      link: /ko/guide/
    - theme: alt
      text: 프로젝트 보기
      link: /ko/projects/

features:
  - icon: ✦
    title: 프로젝트별 가이드
    details: 플러그인마다 설치, 설정, 예제와 API를 독립된 문서 묶음으로 제공합니다.
  - icon: ⧉
    title: 바로 쓰는 예제
    details: 복사해서 이름과 수치만 바꾸면 되는 YAML, 명령어, Skript와 Java 예제입니다.
  - icon: ⌕
    title: 빠른 문서 검색
    details: 설정 키나 기능 이름을 입력하면 전체 프로젝트 문서에서 즉시 찾을 수 있습니다.
---

<section class="brand-intro">
  <div class="brand-intro__copy">
    <p class="eyebrow">FEATURED PROJECT</p>
    <h2>PMdurability</h2>
    <p>CraftEngine 아이템에 자유로운 최대 내구도와 픽셀 게이지를 더합니다. 음식, 제작 도구, 수리, 인챈트와 외부 플러그인 연동까지 하나의 흐름으로 관리합니다.</p>
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
    <p class="eyebrow">DOCUMENTATION PRINCIPLES</p>
    <h2>읽고 끝나는 문서가 아니라, 바로 적용되는 문서</h2>
  </div>
  <ol>
    <li><strong>01</strong><span><b>설정부터</b> 필요한 키와 기본값을 먼저 확인합니다.</span></li>
    <li><strong>02</strong><span><b>예제로</b> 완성된 구성을 복사해 빠르게 테스트합니다.</span></li>
    <li><strong>03</strong><span><b>연동까지</b> 명령어, 이벤트와 외부 플러그인을 연결합니다.</span></li>
  </ol>
</section>

<section class="mascot-strip">
  <img src="/brand/pmstudio-mascots.png" alt="Pixel Muse Studio pixel mascots">
  <div><strong>Pixel Muse Studio</strong><span>작은 아이디어를 오래 쓰이는 시스템으로 만듭니다.</span></div>
</section>
