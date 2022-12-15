import { getDocument, getDocumentSlugs } from '../../lib/docs';
import { YamlDocument } from '../../lib/types';

type PageProps = {
  document: YamlDocument
};

const Page = ({ document }: PageProps) => {
  console.log('Document', document.slug);
  return <div>
    <p>slug: {document.slug.join('/')}</p>
    <p>title: {document.title}</p>
    <p>content: {document.content}</p>
  </div>
}

export default Page

export async function getStaticPaths() {
  const paths: any = getDocumentSlugs().map((slug: string[]) => {
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
    slug: string [];
  };
}

export async function getStaticProps({ params }: Params) {
  console.log('getStaticProps', params);
  return {
    props: {
      document: getDocument(params.slug)
    },
  };
}
