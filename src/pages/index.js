import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { Thumbnail } from '../components/thumbnail';

const Index = ({ data }) => {
  return (
    <Layout title="All of Blog Posts">
      {data.allMdx.nodes.map((v) => {
        return (
          <article key={v.id}>
            <Link to={v.frontmatter.path_alias}>
              <h2>{v.frontmatter.title}</h2>
            </Link>
            <Thumbnail
              alt={v.frontmatter.title}
              src={v.frontmatter.thumbnail}
            />
            <p>最終更新日: {v.frontmatter.published_date}</p>
          </article>
        );
      })}
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
          thumbnail
        }
        id
      }
    }
  }
`;

export default Index;
