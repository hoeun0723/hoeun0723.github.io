require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  lang: 'ko',
  siteName: `Hoeun.blog`,
  author: 'Hoeun(WangHoeun)',
  description: `안녕하세요. 프론트엔드 개발자 왕호은입니다. 꾸준한 성장을 좋아합니다.`,
  siteUrl: 'https://hoeun0723.github.io',
  profileImage: `profile-image.png`,
  mainOgImage: `main-og-image.png`,
  keywords: ['개발블로그', '포트폴리오', 'gatsby'],
  favicon: './static/pencil.png',
  social: {
    email: 'hoeun0723@naver.com',
    github: `https://github.com/hoeun0723`,
    til: 'https://github.com/hoeun0723/TIL',
  },
  seo: {
    google: process.env.GATSBY_SEO_GOOGLE,
    naver: process.env.GATSBY_SEO_NAVER,
  },
  gtag: {
    ga: process.env.GATSBY_ANALYTICS_GOOGLE,
  },
  utterances: {
    src: 'https://utteranc.es/client.js',
    repo: 'hoeun0723/hoeun0723.github.io',
    issueTerm: 'pathname',
    theme: 'github-light',
    label: '💬 comments',
    crossorigin: 'anonymous',
    async: 'true',
  },
   giscus: {
    src: 'https://giscus.app/client.js',
    data_repo: 'hoeun0723/hoeun0723.github.io',
    data_repo_id: 'R_kgDOH5iCbA',
    data_category: 'General',
    data_category_id: 'DIC_kwDOH5iCbM4CUKFl',
    data_mapping: 'og:title',
    data_strict: '0',
    data_reactions_enabled: '1',
    data_emit_metadata: '0',
    data_input_position: 'top',
    data_theme: 'preferred_color_scheme',
    data_lang: 'ko',
    crossorigin: 'anonymous',
    async: 'true',
  },
}
