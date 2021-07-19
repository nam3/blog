import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout title="Welcome to my Gatsby site!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="me" src="../../static/images/from-cms/img_1186.jpg" />
    </Layout>
  );
};

export default IndexPage;
