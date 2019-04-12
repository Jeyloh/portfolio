import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import BlockContent from "@sanity/block-content-to-react";


const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the Projects page</h1>

    <VerticalTimeline>
      {data.allSanityProjects.edges.map(project => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={`${project.node.fromDate} - ${project.node.toDate}`}
          iconStyle={{
            background: project.node.color ? project.node.color.hex : "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            {project.node.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {project.node.technologyString}
          </h4>
          <BlockContent blocks={project.node._rawDescription} />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Layout>
);

export default Projects;

export const query = graphql`
  {
    allSanityProjects {
      edges {
        node {
          title
          fromDate
          toDate
          technologyString
          _rawDescription
          color {
            alpha
            hex
          }
        }
      }
    }
  }
`;
