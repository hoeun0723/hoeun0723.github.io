require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  title: `Hoeun.blog`,
  author: 'Hoeun(WangHoeun)',
  description: `안녕하세요. 프론트엔드 개발자 왕호은입니다. 꾸준한 성장을 좋아합니다.`,
  siteUrl: 'https://hoeun0723.github.io',
  image: `./static/profile-image.png`,
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
  utterances: {
    src: 'https://utteranc.es/client.js',
    repo: 'hoeun0723/hoeun0723.github.io',
    issueTerm: 'pathname',
    theme: 'github-light',
    label: '💬 comments',
    crossorigin: 'anonymous',
    async: 'true',
  },
}
