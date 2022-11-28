import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { getBasePath } from '../lib/path';

const Home = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={`${styles.section} ${styles.sectionInstruments}`}>
      <div className={`${styles.container} ${styles.containerInstruments}`}>
      <img
          className={styles.sectionImage}
          src={`${getBasePath()}/images/digital-instruments-mobile.jpg`}
          alt="Digital instruments"
          loading="lazy"
        />
        <p>
          <img
          className={styles.sfzLogo}
          src={`${getBasePath()}/images/sfz-logo.svg`}
          alt="sfz"
          loading="lazy"
          /> is a free and open format to create musical instruments from sound recordings</p>
      </div>
    </section>
  </Layout>
);

export default Home;
