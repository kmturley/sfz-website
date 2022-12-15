import fs from 'fs';
import glob from 'glob';
import { join } from 'path';
import matter from 'gray-matter';

function getDocument(slug: string[]) {
  const docDir: string = join(process.cwd(), 'data', 'documentation', slug.join('/') + '.md');
  console.log('getDocument', docDir);
  const fileContents = fs.readFileSync(docDir, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug: slug,
    title: data.title || slug.join('/'),
    content,
  };
}

function getDocuments(folder: string) {
  console.log('getDocuments', folder);
  const slugs: string[][] = getDocumentSlugs();
  return slugs.map((slug) => getDocument(slug));;
}

function getDocumentSlugs() {
  const dirRoot: string = join(process.cwd(), 'data', 'documentation');
  console.log('getDocuments', dirRoot);
  const filenames = glob.sync('**/*.md', { cwd: dirRoot });
  return filenames.map((filename: string) => filename.replace('.md', '').split('/'));
}

export { getDocument, getDocuments, getDocumentSlugs };
