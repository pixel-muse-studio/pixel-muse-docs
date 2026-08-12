import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: 'Pixel Muse Studio',
  description: 'Pixel Muse Studio 프로젝트 공식 문서',
  base: '/pixel-muse-docs/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#7c5cff' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/pixel-muse-docs/brand/pixel-muse-icon.png' }],
    ['meta', { property: 'og:title', content: 'Pixel Muse Studio Docs' }],
    ['meta', { property: 'og:description', content: 'Minecraft 프로젝트를 위한 예제 중심 공식 문서' }],
    ['meta', { property: 'og:image', content: 'https://pixel-muse-studio.github.io/pixel-muse-docs/brand/pixel-muse-background.png' }]
  ],
  themeConfig: {
    logo: '/brand/pixel-muse-icon.png',
    siteTitle: 'Pixel Muse Docs',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '문서 검색', buttonAriaLabel: '문서 검색' },
          modal: {
            noResultsText: '검색 결과가 없습니다.',
            resetButtonTitle: '검색 초기화',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' }
          }
        }
      }
    },
    nav: [
      { text: '가이드', link: '/guide/' },
      { text: '프로젝트', link: '/projects/' },
      { text: 'PMdurability', link: '/pmdurability/' },
      { text: 'GitHub', link: 'https://github.com/pixel-muse-studio/pixel-muse-docs' }
    ],
    sidebar: {
      '/guide/': [
        { text: '시작하기', items: [
          { text: '문서 이용 안내', link: '/guide/' },
          { text: '프로젝트 목록', link: '/projects/' }
        ] }
      ],
      '/projects/': [
        { text: 'Pixel Muse 프로젝트', items: [
          { text: '프로젝트 목록', link: '/projects/' },
          { text: 'PMdurability', link: '/pmdurability/' }
        ] }
      ],
      '/pmdurability/': [
        { text: 'PMdurability', collapsed: false, items: [
          { text: '소개', link: '/pmdurability/' },
          { text: '설치 및 시작', link: '/pmdurability/getting-started' },
          { text: 'CraftEngine 설정', link: '/pmdurability/configuration' },
          { text: '완성 예제', link: '/pmdurability/examples' },
          { text: '명령어 · API', link: '/pmdurability/commands-api' }
        ] }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pixel-muse-studio' }
    ],
    editLink: {
      pattern: 'https://github.com/pixel-muse-studio/pixel-muse-docs/edit/main/docs/:path',
      text: '이 페이지 수정하기'
    },
    lastUpdated: { text: '마지막 업데이트' },
    docFooter: { prev: '이전 문서', next: '다음 문서' },
    outline: { level: [2, 3], label: '이 페이지에서' },
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '메뉴',
    darkModeSwitchLabel: '테마',
    footer: {
      message: 'Built for Pixel Muse Studio projects.',
      copyright: 'Copyright © 2026 Pixel Muse Studio'
    }
  }
})
