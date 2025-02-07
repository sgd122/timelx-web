AI time search engine **"Timelx"**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Path

```markdown
src/
├── app/              # 글로벌 상태 관리, App 초기화 설정
├── features/         # 도메인별 핵심 기능 모듈
├── layout/           # 페이지 공통 레이아웃 (Header, Sidebar 등)
├── pages/            # 실제 라우트에 연결된 페이지 컴포넌트
├── views/            # 페이지별 UI 조합 (features + widgets 조립)
├── shared/           # 공통 유틸, hooks, UI 컴포넌트 등
├── widgets/          # 독립적인 UI 블록 (ex: 검색 바, 카드 등)
├── config.ts         # 환경 설정
├── middleware.ts     # API 미들웨어 설정
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
