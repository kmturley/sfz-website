import { SyntheticEvent } from 'react';

export function imageError(event: SyntheticEvent) {
  const el = event.target as HTMLImageElement;
  const fallback = `${el.getAttribute('data-base')}/images/${el.getAttribute('data-section')}.jpg`;
  if (el.getAttribute('src') !== fallback) {
    el.setAttribute('src', fallback);
  }
  return undefined;
}

export function getImagePath(section: string, base: string, category: string, page: string) {
  if (!page) return `${base}/images/${section}.jpg`;
  return `${base}/images/${section}/${category}/${page}.jpg`;
}
