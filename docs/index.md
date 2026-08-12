---
layout: home
pageClass: pixel-muse-home

hero:
  name: Pixel Muse Studio
  text: Turn ideas into playable worlds
  tagline: Example-first documentation for Minecraft projects—from configuration to production-ready integrations.
  image:
    src: /brand/pixel-muse-icon-1000.png
    alt: Pixel Muse Studio pixel logo
  actions:
    - theme: brand
      text: Start reading
      link: /guide/
    - theme: alt
      text: Explore projects
      link: /projects/

features:
  - icon: ✦
    title: Project guides
    details: Installation, configuration, examples, and APIs are organized into a focused guide for every plugin.
  - icon: ⧉
    title: Ready-to-use examples
    details: Copy complete YAML, commands, Skript, and Java examples, then change only the names and values.
  - icon: ⌕
    title: Fast search
    details: Find a setting key or feature across every project from one prominent search experience.
---

<section class="brand-intro">
  <div class="brand-intro__copy">
    <p class="eyebrow">FEATURED PROJECT</p>
    <h2>PMdurability</h2>
    <p>Add flexible maximum durability and pixel gauges to CraftEngine items. Food, crafting tools, repairs, enchantments, and integrations stay in one consistent system.</p>
    <div class="brand-tags"><span>CraftEngine</span><span>Paper</span><span>PlaceholderAPI</span><span>Skript</span></div>
    <a class="brand-link" href="./pmdurability/">Open PMdurability docs <span>→</span></a>
  </div>
  <div class="brand-intro__code">
    <div class="code-head"><i></i><i></i><i></i><span>item.yml</span></div>

```yaml
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
    <h2>Documentation made to be applied, not just read</h2>
  </div>
  <ol>
    <li><strong>01</strong><span><b>Configure</b>Check the required keys and defaults first.</span></li>
    <li><strong>02</strong><span><b>Try an example</b>Copy a complete setup and test it quickly.</span></li>
    <li><strong>03</strong><span><b>Integrate</b>Connect commands, events, and external plugins.</span></li>
  </ol>
</section>

<section class="mascot-strip">
  <img src="/brand/pmstudio-mascots.png" alt="Pixel Muse Studio pixel mascots">
  <div><strong>Pixel Muse Studio</strong><span>Turning small ideas into systems built to last.</span></div>
</section>
