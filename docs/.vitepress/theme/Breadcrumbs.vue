<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const labels: Record<string, { en: string; ko: string }> = {
  guide: { en: 'Guide', ko: '가이드' },
  projects: { en: 'Projects', ko: '프로젝트' },
  pmdurability: { en: 'PMdurability', ko: 'PMdurability' },
  'getting-started': { en: 'Install & start', ko: '설치 및 시작' },
  configuration: { en: 'Configuration', ko: '설정' },
  examples: { en: 'Complete examples', ko: '완성 예제' },
  'commands-api': { en: 'Commands & API', ko: '명령어 · API' }
}

const crumbs = computed(() => {
  const parts = route.path.split('/').filter(Boolean)
  const korean = parts[0] === 'ko'
  const segments = korean ? parts.slice(1) : parts
  const prefix = korean ? '/ko' : ''
  const result = [{ label: korean ? '문서' : 'Docs', href: `${prefix}/` }]
  let path = prefix
  for (const segment of segments) {
    path += `/${segment}`
    const pair = labels[segment]
    result.push({ label: pair ? pair[korean ? 'ko' : 'en'] : segment.replace(/-/g, ' '), href: `${path}/` })
  }
  return result
})
</script>

<template>
  <nav v-if="crumbs.length > 1" class="pm-breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(crumb, index) in crumbs" :key="crumb.href">
      <span v-if="index" aria-hidden="true">/</span>
      <a v-if="index < crumbs.length - 1" :href="crumb.href">{{ crumb.label }}</a>
      <strong v-else aria-current="page">{{ crumb.label }}</strong>
    </template>
  </nav>
</template>
