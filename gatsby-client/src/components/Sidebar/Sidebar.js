import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { StyledSidebar, SidebarNavWrapper, Title, MainNavLink } from "./styles";

const Sidebar = ({ siteTitle }) => {
  return (
    <StyledSidebar>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Title>
            Jørgen
            <br />
            Lybeck
            <br />
            Hansen
          </Title>
        </Link>
      </Title>
      <SidebarNavWrapper>
        <MainNavLink to="/projects/">Projects</MainNavLink>
        <MainNavLink to="/experience/">Experience</MainNavLink>
        <MainNavLink to="/philosophy/">Philosophy</MainNavLink>
        <MainNavLink to="/code-snippets/">Code Snippets</MainNavLink>
        <MainNavLink to="/about/">About</MainNavLink>
        <MainNavLink to="/blog/">Blog</MainNavLink>
        <MainNavLink to="/uses/">Uses</MainNavLink>
      </SidebarNavWrapper>
    </StyledSidebar>
  );
};
Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: ``,
};

export default Sidebar;
