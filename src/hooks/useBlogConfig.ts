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
            siteName
            description
            siteUrl
            profileImage
            mainOgImage
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
            giscus {
              src
              data_repo
              data_repo_id
              data_category
              data_category_id
              data_mapping
              data_strict
              data_reactions_enabled
              data_emit_metadata
              data_input_position
              data_theme
              data_lang
              crossorigin
            }
          }
        }
      }
    `,
  )
  return data.site.siteMetadata
}
export default useBlogConfig
