import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

const Documentation = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Documentation</title>
      </Head>
    </Layout>
  );
};

export default Documentation;

export async function getStaticProps() {
  return {
    props: {},
  };
}
