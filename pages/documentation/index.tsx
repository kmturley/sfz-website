import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { getDocumentSlugs } from '../../lib/docs';
import { GetBasePath } from '../../lib/path';
import styles from '../../styles/list.module.css';

type DocumentationProps = {
  slugs: string[][];
};

const Documentation = ({ slugs }: DocumentationProps) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Documentation</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>Documentation</h1>
        </div>
        <div className={styles.row}>
          <h3>Slugs</h3>
          {slugs.map((slug: string[], itemIndex: number) => (
            <p key={`${slug}-${itemIndex}`}>
              <a href={`${GetBasePath()}${slug.join('/')}`}>
                {slug.join('/')}
              </a>
            </p>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Documentation;

export async function getStaticProps() {
  return {
    props: {
      slugs: getDocumentSlugs('documentation'),
    },
  };
}
