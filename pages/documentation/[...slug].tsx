import Head from 'next/head';
import html from 'remark-html';
import { remark } from 'remark';
import Layout, { siteTitle } from '../../components/layout';
import { getDocument, getDocuments, getDocumentSlugs } from '../../lib/docs';
import { YamlDocument } from '../../lib/types';
import styles from '../../styles/docs.module.css';
import SubNav, { SubNavGroup } from '../../components/subnav';

type PageProps = {
  groups: SubNavGroup[];
  document: YamlDocument;
  formatted: string;
};

const Page = ({ groups, document, formatted }: PageProps) => {
  console.log('Document', document.slug);
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Documentation - {document.title}</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <SubNav groups={groups}></SubNav>
          </div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: formatted }}></div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;

export async function getStaticPaths() {
  const paths: any = getDocumentSlugs('documentation').map((slug: string[]) => {
    return {
      params: { slug: slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

type Params = {
  params: {
    slug: string[];
  };
};

export async function getStaticProps({ params }: Params) {
  const document: YamlDocument = getDocument('documentation', params.slug);
  const formatted: any = await remark().use(html).process(document.content);
  return {
    props: {
      groups:[
        { name: 'Getting Started', root: '/documentation/getting-started/', items: getDocuments('documentation/getting-started') },
        { name: 'Tutorials', root: '/documentation/tutorials/', items: getDocuments('documentation/tutorials') },
        { name: 'Syntax', root: '/documentation/syntax/', items: getDocuments('documentation/syntax') },
      ],
      document,
      formatted: formatted.toString(),
    },
  };
}
