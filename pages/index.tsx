import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { GetBasePath } from '../lib/path';
import HowItWorks from '../components/how-it-works';
import Banner from '../components/banner';

const Home = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Banner></Banner>
    <HowItWorks></HowItWorks>
  </Layout>
);

export default Home;
