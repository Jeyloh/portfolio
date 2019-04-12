import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import BlockContent from "@sanity/block-content-to-react";

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the About page</h1>
    {JSON.stringify(data)}
  </Layout>
);

export default About;

export const query = graphql`
  {
    sanityAbout {
      header
      _rawImage
      _rawDescription
    }
  }
`;
