import { SyntheticEvent } from 'react';

export function imageError(event: SyntheticEvent) {
  const el = event.target as HTMLImageElement;
  const fallback = `${el.getAttribute('data-base')}/images/${el.getAttribute('data-section')}.jpg`;
  if (el.getAttribute('src') !== fallback) {
    el.setAttribute('src', fallback);
  }
  return undefined;
}
