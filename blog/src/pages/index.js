import * as React from "react"
import { Link, graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
//import { GatsbyImage } from "gatsby-plugin-image"
//import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
//import { List, ListItem } from "../components/List"
//import { Box, Card, Image, Heading } from "rebass"

/*const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`*/

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul>
      {data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>
            {edge.node.title}
          </Link>
          <div>
            <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              alt="test"
            />
          </div>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 400
            )
          }
        }
      }
    }
  }
`
//plip
