import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import { h } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'
import './custom.css'

const BASE = '/pixel-muse-docs/'
const HISTORY_KEY = 'pm-docs-recent-searches'

function isKoreanVisitor() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  const koreanLanguage = languages.some((value) => value?.toLowerCase().startsWith('ko'))
  const koreanTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Seoul'
  return koreanLanguage || koreanTimezone
}

function readHistory(): string[] {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]').slice(0, 3) }
  catch { return [] }
}

function saveSearch(value: string) {
  const query = value.trim()
  if (!query) return
  localStorage.setItem(HISTORY_KEY, JSON.stringify([query, ...readHistory().filter((item) => item !== query)].slice(0, 3)))
}

function enhanceSearchHistory() {
  const modal = document.querySelector('.VPLocalSearchBox')
  const input = modal?.querySelector('input') as HTMLInputElement | null
  if (!modal || !input || modal.querySelector('.pm-recent-searches')) return

  const recent = document.createElement('section')
  recent.className = 'pm-recent-searches'
  const render = () => {
    const items = readHistory()
    recent.hidden = Boolean(input.value.trim()) || items.length === 0
    recent.innerHTML = items.length
      ? `<p>${document.documentElement.lang.startsWith('ko') ? '최근 검색' : 'Recent searches'}</p><div>${items.map((item) => `<button type="button">${item.replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char] || char))}</button>`).join('')}</div>`
      : ''
    recent.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
      input.value = button.textContent || ''
      input.dispatchEvent(new Event('input', { bubbles: true }))
      input.focus()
    }))
  }

  const searchShell = input.closest('.search-bar') || input.parentElement
  searchShell?.insertAdjacentElement('afterend', recent)
  input.addEventListener('input', render)
  input.addEventListener('keydown', (event) => { if (event.key === 'Enter') saveSearch(input.value) })
  modal.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) saveSearch(input.value)
  })
  render()
}

function startClientEnhancements() {
  document.addEventListener('click', (event) => {
    const anchor = (event.target as HTMLElement).closest('a')
    if (!anchor) return
    const url = new URL(anchor.href, location.href)
    if (anchor.closest('.VPNavBarTranslations, .translations')) {
      localStorage.setItem('pm-docs-language', url.pathname.startsWith(`${BASE}ko/`) ? 'ko' : 'en')
    }
  })
  const savedLanguage = localStorage.getItem('pm-docs-language')
  const isKoreanPath = location.pathname.startsWith(`${BASE}ko/`)
  const relativePath = location.pathname.slice(BASE.length)
  const shouldUseKorean = savedLanguage === 'ko' || (!savedLanguage && isKoreanVisitor())
  if (shouldUseKorean && !isKoreanPath) {
    location.replace(`${BASE}ko/${relativePath}${location.search}${location.hash}`)
    return
  }
  if (savedLanguage === 'en' && isKoreanPath) {
    location.replace(`${BASE}${relativePath.slice(3)}${location.search}${location.hash}`)
    return
  }
  const observer = new MutationObserver(enhanceSearchHistory)
  observer.observe(document.body, { childList: true, subtree: true })
  enhanceSearchHistory()
}

export default {
  ...DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-before': () => h(Breadcrumbs)
  }),
  enhanceApp() {
    if (inBrowser) setTimeout(startClientEnhancements, 0)
  }
}
