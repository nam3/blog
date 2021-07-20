import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { container } from './layout.module.css';

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={container}>
      <title>{title}</title>
      <h1>{title || data.site.siteMetadata.title}</h1>
      {children}
    </main>
  );
};

export default Layout;
