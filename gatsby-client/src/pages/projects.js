import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


const mockArr = [
  {date: "test", title: "test1", description: "test2"},
  {date: "test", title: "test1", description: "test2"},
  {date: "test", title: "test1", description: "test2"},
]

const Projects = ({data}) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the Projects page</h1>

    <VerticalTimeline>

    { mockArr.map( project => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={project}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">{project}</h3>
        <h4 className="vertical-timeline-element-subtitle">{project}</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
      </VerticalTimelineElement>
    ))}

      
     
    </VerticalTimeline>
  </Layout>
)

export default Projects

export const query = graphql`{
  sanityProjects {
     title
     description
   }
 }`;

