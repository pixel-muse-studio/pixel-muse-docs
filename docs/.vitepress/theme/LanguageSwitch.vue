<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'

const route = useRoute()
const korean = computed(() => route.path.includes('/ko/'))
const relativePath = computed(() => {
  const path = route.path.replace(/^\/pixel-muse-docs\//, '/').replace(/^\/ko\//, '/')
  return path === '' ? '/' : path
})
const englishHref = computed(() => withBase(relativePath.value))
const koreanHref = computed(() => withBase(`/ko${relativePath.value}`))
</script>

<template>
  <nav class="pm-language-switch" aria-label="언어 선택">
    <a :class="{ active: korean }" :href="koreanHref" lang="ko">한국어</a>
    <span aria-hidden="true">/</span>
    <a :class="{ active: !korean }" :href="englishHref" lang="en">EN</a>
  </nav>
</template>
