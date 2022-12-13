import { useRouter } from 'next/router';

function GetBasePath() {
  return useRouter().basePath;
}

function GetCrumbUrl(items: string[], itemToMatch: string) {
  let url: string = '';
  for (const item of items) {
    url += '/' + item;
    if (item === itemToMatch) break;
  }
  return url;
}

function IsSelected(path: string) {
  const router = useRouter();
  if (path === '/') {
    return router.asPath === path;
  }
  return router.asPath.startsWith(path);
}

export { GetBasePath, GetCrumbUrl, IsSelected };
