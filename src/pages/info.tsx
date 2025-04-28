import { graphql } from "gatsby"
import {Link} from 'gatsby'

import Text from '@/components/Text'

type InfoPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
                author: string
            }
        }
    }
}

const InfoPage = ({
    data: {
        site: {
            siteMetadata: {title, description,author},
        },
    },
}: InfoPageProps) => {
    return (
        <div>
            <Text text={title}/>
            <Text text={description}/>
            <Text text={author}/>
            <Link to="/">To Main</Link>
        </div>
    )
}

export default InfoPage
export const metadataQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
