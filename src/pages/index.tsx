import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import queryString, {ParsedQuery} from 'query-string'
import { useMemo } from "react";

import CategoryList, {CategoryListProps} from "@/components/CategoryList";
import PostList, {PostType} from '@/components/Main/PostList'
import Layout from '@/Layout'
import { PostListItemType } from "@/types/PostItem.types";

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}


const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const IndexPage = ({
  location: {search},
  data: {
    allMarkdownRemark:{edges},
    file:{
      childImageSharp: {gatsbyImageData},
    },
  },
}:IndexPageProps)=> {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory = typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category
   // category 프로퍼티 값이 문자열 형태가 아니거나 존재하지 않는 경우에는 기본적으로 카테고리 값을 All로 지정하고, 그러지 않은 경우에는 파싱한 값을 지정
   const categoryList = useMemo(
    ()=> edges.reduce(
      (
        list: CategoryListProps['categoryList'],
        {
          node: {
            frontmatter:{categories},
          },
        }: PostType,
      ) =>{
        categories.forEach(category=>{
          if(list[category] === undefined) list[category]=1
          else list[category]++
        })

        list['All']++

        return list
      },
      {All: 0},
    ),
    [],
   )
   return (
    <Layout>
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList}/>
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
   )
}

export default IndexPage
export const getPostList = graphql`
  query getPostList {
  allMarkdownRemark(sort: {order: DESC, fields:
  [frontmatter___date, frontmatter___title]}) {
  edges{
    node {
      id
      fields {
        slug
      }
      frontmatter {
        title
        summary
        date(formatString: "YYYY.MM.DD.")
        categories
        thumbnail {
        childImageSharp {
          gatsbyImageData(width: 768, height: 400)
        }
        }
      }
    }
  }}
    file(name: {eq: "profile-image"}) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 120)
    }}
}
`