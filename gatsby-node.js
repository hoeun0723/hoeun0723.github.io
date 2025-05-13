const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

// Setup Import Alias
exports.onCreateWebpackConfig = ({getConfig,actions}) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@' : path.resolve(__dirname,'./src'),
      },
    },
  })
}

// Generate a Slug Each Post Data
exports.onCreateNode = ({node, getNode, actions})=>{
  const {createNodeField} = actions
  
  if(node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode})

    // slug 데이터가 /test/ 이렇게 나와서 뒤에 /제거 (/test/ -> /test)
    createNodeField({node, name: 'slug', value: slug.slice(0,-1)})
  }
}

//Generate Post Page Through Markdown Data
exports.createPages = async({actions,graphql,reporter}) => {
  const {createPage} = actions

  //Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
      {
      allMarkdownRemark(sort: {order: DESC, fields: 
      [frontmatter___date, frontmatter___title] }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      }
    `,
  )

  //Handling GraphQL Query Error
  if( queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  //Import Post Template Component
  const PostTemplateComponent = path.resolve(__dirname,'src/templates/post.template.tsx')

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: {slug},
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: {slug}, // 컴포넌트에서 Props로 받을 수 있고 GraphQL Query의 파라미터로도 받을 수 있음음
    }

    createPage(pageOptions)
  }

  // Generate Post Page And Passing Slug Props for Query

  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}
