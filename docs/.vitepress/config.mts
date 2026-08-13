import { defineConfig } from 'vitepress'

const enSidebar = {
  '/guide/': [{ text: 'Getting started', items: [
    { text: 'Using the docs', link: '/guide/' },
    { text: 'Projects', link: '/projects/' }
  ] }],
  '/projects/': [{ text: 'Pixel Muse projects', items: [
    { text: 'All projects', link: '/projects/' },
    { text: 'PMdurability', link: '/pmdurability/' }
  ] }],
  '/pmdurability/': [{ text: 'PMdurability', collapsed: false, items: [
    { text: 'Overview', link: '/pmdurability/' },
    { text: 'Install & start', link: '/pmdurability/getting-started' },
    { text: 'CraftEngine config', link: '/pmdurability/configuration' },
    { text: 'Complete examples', link: '/pmdurability/examples' },
    { text: 'Commands & API', link: '/pmdurability/commands-api' }
  ] }]
}

const koSidebar = {
  '/ko/guide/': [{ text: '시작하기', items: [
    { text: '문서 이용 안내', link: '/ko/guide/' },
    { text: '프로젝트 목록', link: '/ko/projects/' }
  ] }],
  '/ko/projects/': [{ text: 'Pixel Muse 프로젝트', items: [
    { text: '프로젝트 목록', link: '/ko/projects/' },
    { text: 'PMdurability', link: '/ko/pmdurability/' }
  ] }],
  '/ko/pmdurability/': [{ text: 'PMdurability', collapsed: false, items: [
    { text: '소개', link: '/ko/pmdurability/' },
    { text: '설치 및 시작', link: '/ko/pmdurability/getting-started' },
    { text: 'CraftEngine 설정', link: '/ko/pmdurability/configuration' },
    { text: '완성 예제', link: '/ko/pmdurability/examples' },
    { text: '명령어 · API', link: '/ko/pmdurability/commands-api' }
  ] }]
}

export default defineConfig({
  title: 'Pixel Muse Studio',
  description: 'Example-first documentation for Pixel Muse Studio projects',
  base: '/pixel-muse-docs/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    config(md) {
      const renderFence = md.renderer.rules.fence
      if (!renderFence) return
      md.renderer.rules.fence = (tokens, index, options, env, self) => {
        const token = tokens[index]
        const info = token.info.trim()
        const titleMatch = info.match(/\[([^\]]+)\]\s*$/)
        const language = (info.match(/^([^\s[]+)/)?.[1] || 'text').toLowerCase()
        if (titleMatch) token.info = info.replace(/\s*\[[^\]]+\]\s*$/, '')
        const safeLanguage = md.utils.escapeHtml(language === 'vb' ? 'skript' : language)
        const rightLabel = titleMatch ? md.utils.escapeHtml(titleMatch[1]) : safeLanguage
        return `<div class="pm-code-example" translate="no"><div class="pm-code-toolbar"><span class="pm-code-dots" aria-hidden="true"></span><span class="pm-code-label">${rightLabel}</span></div>${renderFence(tokens, index, options, env, self)}</div>`
      }
    }
  },
  locales: {
    root: { label: 'English', lang: 'en-US', link: '/' },
    ko: { label: '한국어', lang: 'ko-KR', link: '/ko/' }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#7c36ef' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/pixel-muse-docs/brand/pixel-muse-icon.png' }],
    ['meta', { property: 'og:title', content: 'Pixel Muse Studio Docs' }],
    ['meta', { property: 'og:description', content: 'Example-first documentation for Minecraft projects' }],
    ['meta', { property: 'og:image', content: 'https://pixel-muse-studio.github.io/pixel-muse-docs/brand/pixel-muse-background.png' }]
  ],
  themeConfig: {
    logo: '/brand/pixel-muse-icon.png',
    siteTitle: 'Pixel Muse Docs',
    search: { provider: 'local' },
    socialLinks: [],
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Projects', items: [
        { text: 'PMdurability', link: '/pmdurability/' }
      ] }
    ],
    sidebar: { ...enSidebar, ...koSidebar },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    lastUpdated: { text: 'Last updated' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    locales: {
      ko: {
        label: '한국어',
        selectText: '언어',
        nav: [
          { text: '가이드', link: '/ko/guide/' },
          { text: '프로젝트', items: [
            { text: 'PMdurability', link: '/ko/pmdurability/' }
          ] }
        ],
        outline: { level: [2, 3], label: '이 페이지에서' },
        docFooter: { prev: '이전 문서', next: '다음 문서' },
        lastUpdated: { text: '마지막 업데이트' },
        returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴',
        darkModeSwitchLabel: '테마'
      }
    },
    editLink: {
      pattern: 'https://github.com/pixel-muse-studio/pixel-muse-docs/edit/main/docs/:path',
      text: 'Edit this page'
    },
    footer: {
      message: 'Built for Pixel Muse Studio projects.',
      copyright: 'Copyright © 2026 Pixel Muse Studio'
    }
  }
})
