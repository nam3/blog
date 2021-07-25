import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const Index = ({ data }) => {
  return (
    <Layout title="All of Blog Posts">
      <ul>
        {data.allMdx.nodes.map((v) => {
          return (
            <article key={v.id}>
              <Link to={v.frontmatter.path_alias}>
                <h2>{v.frontmatter.title}</h2>
              </Link>
              <p>最終更新日: {v.frontmatter.published_date}</p>
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
          path_alias
          published_date(formatString: "YYYY年MM月DD日")
          title
        }
        id
      }
    }
  }
`;

export default Index;
