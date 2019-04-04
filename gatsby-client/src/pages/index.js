import React from "react"
import lax from 'lax.js'
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react";
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import * as Styled from "../components/IndexComponent/styles"
import Particles from 'react-particles-js';
import {getParticles} from "../particles-setup";

lax.setup()
// https://github.com/alexfoxy/laxxx/blob/master/README.md#supported-presets
document.addEventListener('scroll', function (x) {
  lax.update(window.scrollY)
}, false)

lax.update(window.scrollY)

const IndexPage = ({ data }) => {
  const [particles, addParticles] = React.useState(100);
  const titleRef = React.createRef();

  React.useEffect(() => {
    if (titleRef.current) {
      lax.addElement(titleRef.current)
    }

  }, [])
  

  return (
    <Styled.StyledIndexWrapper>
      <SEO title="Jørgen Lybeck Hansen" />
      <Styled.SplashScreenWrapper onClick={() => addParticles(particles + 5)}>
      <Particles style={{position: "absolute", top: 0, left: 0}} params={getParticles(particles)}/>
        <Styled.SplashScreenTitle fontSize="5rem" ref={titleRef} data-lax-rotate data-lax-preset="fadeInOut">
          Jørgen<br/>Lybeck<br/>Hansen
          </Styled.SplashScreenTitle>
        <Styled.SplashScreenArrow />
      </Styled.SplashScreenWrapper>
      
      <Layout>
        <h1>{data.sanityAbout.header}</h1>
        {JSON.stringify(data.sanityAbout.description)}
        <BlockContent blocks={data.sanityAbout.description} />
      </Layout>
    </Styled.StyledIndexWrapper>
  )
}

export default IndexPage

export const query = graphql`{
  sanityAbout {
     header
     description {
  	  _key
  	  _type
  	  style
  	  list
  	} 
   }
 }`;

