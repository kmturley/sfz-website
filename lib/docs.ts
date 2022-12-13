import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { YamlDocument } from './types';

function getDocument(folder: string, filename: string) {
  const docDir: string = join(process.cwd(), 'data', folder, filename);
  console.log('getDocument', docDir);
  const fileContents = fs.readFileSync(docDir, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug: filename,
    title: data.title || filename,
    content,
  };
}

function getDocuments(folder: string) {
  console.log('getDocuments', folder);
  const slugs: string[] = getDocumentSlugs(folder);
  const posts: YamlDocument[] = [];
  slugs.forEach((slug) => {
    if (slug.includes('.md')) {
      posts.push(getDocument(folder, slug));
    }
  });
  return posts;
}

function getDocumentSlugs(folder: string) {
  const docsDir: string = join(process.cwd(), 'data', folder);
  console.log('getDocumentSlugs', docsDir);
  return fs.readdirSync(docsDir);
}

export { getDocument, getDocuments, getDocumentSlugs }
