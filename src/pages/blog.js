import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const Blog = ({ data }) => {
  return (
    <Layout title="All of Blog Posts">
      <ul>
        {data.allFile.nodes.map((v) => {
          return <li>{v.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
