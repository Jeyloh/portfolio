import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the Projects page</h1>

    <VerticalTimeline>
      {data.allSanityProjects.edges.map(project => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={project.node.dateString}
          iconStyle={{
            background: project.node.color || "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            {project.node.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {project.node.technologyString}
          </h4>
          <p>{project.node.description}</p>
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
          dateString
          description
        }
      }
    }
  }
`;
