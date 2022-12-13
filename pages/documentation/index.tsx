import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { getDocuments } from '../../lib/docs';
import { YamlDocument } from '../../lib/types';
import styles from '../../styles/list.module.css';

type DocumentationProps = {
  syntax: {
    extensions: YamlDocument[];
    headers: YamlDocument[];
    misc: YamlDocument[];
    modulations: YamlDocument[];
    opcodes: YamlDocument[];
  };
  tutorials: YamlDocument[];
};

const Documentation = ({ syntax, tutorials }: DocumentationProps) => {
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
          <h3>Syntax</h3>
          {syntax.headers.map((document: YamlDocument, itemIndex: number) => (
            <p key={`${document.slug}-${itemIndex}`}>{document.title}</p>
          ))}
        </div>
        <div className={styles.row}>
          <h3>Tutorials</h3>
          {tutorials.map((document: YamlDocument, itemIndex: number) => (
            <p key={`${document.slug}-${itemIndex}`}>{document.title}</p>
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
      syntax: {
        extensions: getDocuments('syntax/extensions'),
        headers: getDocuments('syntax/headers'),
        misc: getDocuments('syntax/misc'),
        modulations: getDocuments('syntax/modulations'),
        opcodes: getDocuments('syntax/opcodes'),
      },
      tutorials: getDocuments('tutorials'),
    },
  };
}
