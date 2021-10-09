import { Link, graphql } from 'gatsby'
import React from 'react'
import Seo from "../components/seo";
import Container from '../components/container'

const Home = ({ data }) => {

  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMdx.nodes;

  return (
    <Container>
      <Seo title={siteTitle} description={siteDescription} />
      {posts.map((post) => {
        const title = post.frontmatter.title || post.slug
        return (
          <div key={post.slug} className="card">
            <Link className="card-link" to={post.slug}>
              <h1 className="card-title">{title}</h1>
              <p className="card-date">{post.frontmatter.date}</p>
              <p className="class-desc">{post.frontmatter.description}</p>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export default Home

export const pageQuery = graphql`
{
    site {
      siteMetadata {
        description
        title
      }
    }
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
        nodes {
          excerpt
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            description
          }
          slug
        }
      }
  }
`
