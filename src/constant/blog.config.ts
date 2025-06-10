// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const blogConfig: ConfigType = require('../../blog-config')

interface ConfigType {
  title: string
  author: string
  description: string
  introduction: string
  siteUrl: string
  image: string
  keywords: string[]
  favicon: string
  social: {
    email: string
    github: string
    til: string
  }
  utterances: {
    src: string
    repo: string
    theme: string
    label: string
    crossorigin: string
    async: string
  }
}

const BLOG_CONFIG = {
  ...blogConfig,
}

export default BLOG_CONFIG
