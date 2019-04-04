import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const Uses = ({ data }) => {

  return (
    <Layout>
      <SEO title="Uses" />
      <h1>Hi from the Uses page</h1>
      {data.allSanityUses.edges.map(({ node: use }) => (
        <>
          <h3>{use.header}</h3>
          <p>{use.description}</p>
        </>
      ))}
    </Layout>
  )
}

export default Uses

export const query = graphql`{
  allSanityUses {
    edges {
      node {
        header
        description
      }
    }
  }
}`;
