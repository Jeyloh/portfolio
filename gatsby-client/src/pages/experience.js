import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import wordCloud from "../assets/word_cloud";

const Experiences = ({ data }) => { 
  const ref = React.useRef();


  React.useEffect( () => {
    while (ref.current && ref.current.firstChild) {
      ref.current.removeChild(ref.current.firstChild);
    }
    const techStringFromArray = data.allSanityProjects.edges.map ( ({node: use}) => {
      return use.technologyString.split(",");
    });
    const merged = [].concat.apply([], techStringFromArray);
  
    wordCloud(merged).start();
  })

  return (
    <Layout>
      <SEO title="Experiences" />
      <svg ref={ref} id="word_cloud"/>
    </Layout>
  );
}

export default Experiences;

export const query = graphql`
  {
    allSanityProjects {
      edges {
        node {
          technologyString
        }
      }
    }
  }
`;
