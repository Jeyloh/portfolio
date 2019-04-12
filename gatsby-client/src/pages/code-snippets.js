import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    code: props => (
      <pre data-language="javascript">
        <code>{props.text}</code>
      </pre>
    ),
  },
};

const CodeSnippets = ({ data }) => (
  <Layout>
    <SEO title="Code Snippets" />
    <div>
      <h1>Hi from the Code Snippets page</h1>

      {data.allSanityCodeSnippets.edges.map(({ node: use }) => {
        return (
          <div>
            <h5>{use.description}</h5>
            <pre>
              <code className="language-javascript">
                <BlockContent blocks={use._rawCode} />
              </code>
            </pre>
          </div>
        );
      })}
    </div>
  </Layout>
);

export default CodeSnippets;

export const query = graphql`
  {
    allSanityCodeSnippets {
      edges {
        node {
          description
          _rawCode
        }
      }
    }
  }
`;
