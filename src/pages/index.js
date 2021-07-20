import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import Layout from '../components/layout';

const Blog = ({ data }) => {
  return (
    <Layout title="All of Blog Posts">
      <ul>
        {data.allMdx.nodes.map((v) => {
          return (
            <article key={v.id}>
              <h2>{v.frontmatter.title}</h2>
              <p>{v.frontmatter.pusblished_data}</p>
              <MDXRenderer>{v.body}</MDXRenderer>
            </article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___published_date }) {
      nodes {
        frontmatter {
          title
          published_date(formatString: "YYYY年MM月DD日")
        }
        id
        body
      }
    }
  }
`;

export default Blog;
