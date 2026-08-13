import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import { h } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'
import LanguageSwitch from './LanguageSwitch.vue'
import './custom.css'

const BASE = '/pixel-muse-docs/'

function isKoreanVisitor() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  const koreanLanguage = languages.some((value) => value?.toLowerCase().startsWith('ko'))
  const koreanTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Seoul'
  return koreanLanguage || koreanTimezone
}

function readLanguage() {
  try { return localStorage.getItem('pm-docs-language') }
  catch { return null }
}

function saveLanguage(language: 'ko' | 'en') {
  try { localStorage.setItem('pm-docs-language', language) }
  catch {}
}

function startClientEnhancements() {
  const syncScrolledState = () => document.documentElement.classList.toggle('pm-scrolled', window.scrollY > 12)
  window.addEventListener('scroll', syncScrolledState, { passive: true })
  syncScrolledState()

  document.addEventListener('click', (event) => {
    const searchTrigger = (event.target as HTMLElement).closest('.pm-search-trigger')
    if (searchTrigger) {
      document.querySelector<HTMLButtonElement>('.VPNavBarSearch button')?.click()
      return
    }
    const anchor = (event.target as HTMLElement).closest('a')
    if (!anchor) return
    const url = new URL(anchor.href, location.href)
    if (anchor.closest('.VPNavBarTranslations, .translations')) {
      saveLanguage(url.pathname.startsWith(`${BASE}ko/`) ? 'ko' : 'en')
    }
  })
  const savedLanguage = readLanguage()
  const shouldUseKorean = savedLanguage === 'ko' || (!savedLanguage && isKoreanVisitor())
  if (location.pathname === BASE && shouldUseKorean) {
    location.replace(`${BASE}ko/${location.search}${location.hash}`)
    return
  }
}

export default {
  ...DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-before': () => h(Breadcrumbs),
    'nav-bar-content-after': () => h(LanguageSwitch)
  }),
  enhanceApp() {
    if (inBrowser) setTimeout(startClientEnhancements, 0)
  }
}
