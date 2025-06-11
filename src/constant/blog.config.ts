import { ConfigType } from '@/types/gatsby.type'

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const blogConfig: ConfigType = require('../../blog-config')

const BLOG_CONFIG = {
  ...blogConfig,
}

export default BLOG_CONFIG
