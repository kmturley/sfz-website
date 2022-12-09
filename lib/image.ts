import { SyntheticEvent } from 'react';
import { GetBasePath } from '../lib/path';

export function imageError(event: SyntheticEvent) {
  const el = event.target as HTMLImageElement;
  const fallback = `${GetBasePath()}/images/plugin.png`;
  if (el.getAttribute('src') !== fallback) {
    el.setAttribute('src', fallback);
  }
  return undefined;
}
