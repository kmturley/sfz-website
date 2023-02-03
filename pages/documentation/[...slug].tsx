import Head from 'next/head';
import { useEffect } from 'react';
import html from 'remark-html';
import { remark } from 'remark';
import Layout, { siteTitle } from '../../components/layout';
import { getDocument, getDocumentList, getDocumentSlugs } from '../../lib/docs';
import { YamlDocument } from '../../lib/types';
import styles from '../../styles/docs.module.css';
import SubNav, { SubNavGroup } from '../../components/subnav';
import 'highlight.js/styles/vs2015.css';
import hljs from 'highlight.js';
// import { CodeLineNumbers } from '../../lib/highlight.js/code-line-numbers';
import sfz from '../../lib/highlight.js/sfz';

type PageProps = {
  groups: SubNavGroup[];
  document: YamlDocument;
};

const Page = ({ groups, document }: PageProps) => {
  const title: string = `${siteTitle} - Documentation - ${document.title}`;
  useEffect(() => {
    hljs.configure({ languages: ['sfz'] });
    hljs.registerLanguage('sfz', sfz);
    hljs.highlightAll();
    // CodeLineNumbers.addCodeLineNumbers();
  });
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <SubNav groups={groups}></SubNav>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{document.title}</h1>
            <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: document.content }} />
          </div>
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
      groups: [
        {
          name: 'Getting Started',
          root: '/documentation/getting-started/',
          items: getDocumentList('documentation/getting-started'),
        },
        { name: 'Tutorials', root: '/documentation/tutorials/', items: getDocumentList('documentation/tutorials') },
        { name: 'Syntax', root: '/documentation/syntax/', items: getDocumentList('documentation/syntax') },
      ],
      document: {
        title: document.title,
        slug: document.slug,
        content: formatted.toString(),
      },
    },
  };
}
