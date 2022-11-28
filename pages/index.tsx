import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { getBasePath } from '../lib/path';

const Home = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={`${styles.section} ${styles.sectionOpenSource}`}>
      <div className={`${styles.container} ${styles.containerCols}`}>
      </div>
    </section>
  </Layout>
);

export default Home;
