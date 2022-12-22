import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

const Documentation = () => {
  const title: string = `${siteTitle} - Documentation`;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
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
