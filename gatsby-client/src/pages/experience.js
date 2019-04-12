import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import BlockContent from "@sanity/block-content-to-react";

const Experiences = ({ data }) => (
  <Layout>
    <SEO title="Experiences" />
    <h1>Hi from the Experiences page</h1>

    {data.allSanityExperiences.edges.map(({ node: use }) => {
      return (
        <div>
          <h5>{use.description}</h5>
          <BlockContent blocks={use.description} />
        </div>
      );
    })}
  </Layout>
);

export default Experiences;

export const query = graphql`
  {
    allSanityExperiences {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`;
