import { useStaticQuery, graphql } from 'gatsby'

import { ConfigType } from '@/types/gatsby.type'

interface SiteMeta {
  site: {
    siteMetadata: ConfigType
  }
}

const useBlogConfig = () => {
  const data = useStaticQuery<SiteMeta>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            title
            description
            siteUrl
            image
            keywords
            favicon
            social {
              email
              github
              til
            }
            seo {
              google
              naver
            }
            utterances {
              src
              repo
              theme
              label
              crossorigin
              issueTerm
              async
            }
          }
        }
      }
    `,
  )
  return data.site.siteMetadata
}
export default useBlogConfig
