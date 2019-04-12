import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import * as Styled from "../components/IndexComponent/styles";
import Particles from "react-particles-js";
import { getParticles } from "../particles-setup";
import About from "./about";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../../client-config";

// https://github.com/alexfoxy/laxxx/blob/master/README.md#supported-presets

const IndexPage = ({ data }) => {
  const [particles, addParticles] = React.useState(100);
  const titleRef = React.createRef();

  alert(JSON.stringify(myConfiguredSanityClient));

  const builder = imageUrlBuilder(myConfiguredSanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Styled.StyledIndexWrapper>
      <SEO title="Jørgen Lybeck Hansen" />
      <Styled.SplashScreenWrapper onClick={() => addParticles(particles + 5)}>
        <Particles
          style={{ position: "absolute", top: 0, left: 0 }}
          params={getParticles(particles)}
        />
        <Styled.SplashScreenTitle fontSize="5rem" ref={titleRef}>
          Jørgen
          <br />
          Lybeck
          <br />
          Hansen
        </Styled.SplashScreenTitle>
        <Styled.SplashScreenArrow />
      </Styled.SplashScreenWrapper>

      <Layout>
        <h1>{data.sanityAbout.header}</h1>
        <BlockContent blocks={data.sanityAbout._rawDescription} />
        <img
          src={urlFor(data.sanityAbout._rawImage)
            .width(200)
            .url()}
        />
      </Layout>
    </Styled.StyledIndexWrapper>
  );
};

export default IndexPage;

export const query = graphql`
  {
    sanityAbout {
      header
      _rawImage
      _rawDescription
    }
  }
`;
