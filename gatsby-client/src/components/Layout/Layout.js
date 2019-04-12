/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "../layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import { StyledMainLayout } from "./styles";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <StyledMainLayout>
          <Sidebar siteTitle={data.site.siteMetadata.title} />
          <Content>{children}</Content>
        </StyledMainLayout>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
