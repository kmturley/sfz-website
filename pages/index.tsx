import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import HowItWorks from '../components/how-it-works';
import Banner from '../components/banner';
import GetStarted from '../components/get-started';

const Home = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Banner></Banner>
    <HowItWorks></HowItWorks>
    <GetStarted></GetStarted>
  </Layout>
);

export default Home;
