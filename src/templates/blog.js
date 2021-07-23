import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Blog = ({ pageContext }) => {
  return (
    <main>
      <title>{pageContext.title}</title>
      <article>
        <h1>{pageContext.title}</h1>
        <p>最終更新日: {pageContext.publishedDate}</p>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </article>
    </main>
  );
};

export default Blog;
