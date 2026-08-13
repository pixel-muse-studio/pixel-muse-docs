# Pixel Muse Studio Docs

Pixel Muse Studio 프로젝트의 공식 문서 사이트입니다.

- 문서 사이트: https://pixel-muse-studio.github.io/pixel-muse-docs/
- 기존 GitHub Wiki: https://github.com/pixel-muse-studio/pixel-muse-docs/wiki
- 첫 프로젝트: PMdurability

## 로컬 실행

```bash
npm install
npm run docs:dev
```

## 문서 추가 원칙

- 모든 문서 원본은 `docs/ko/`에 한국어로 작성합니다.
- 영어 문서는 GitHub Actions가 GitHub Models를 사용해 배포 시 자동 생성합니다.
- 생성된 영어 파일은 직접 수정하지 않습니다.
- 프로젝트마다 독립된 디렉터리와 좌측 메뉴를 사용합니다.
- 모든 주요 기능에는 복사 가능한 예제를 포함합니다.
- 설정, 완성 예제, 명령어와 API를 분리합니다.
