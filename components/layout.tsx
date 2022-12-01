import Head from 'next/head';
import Navigation from './navigation';
import styles from '../styles/components/layout.module.css';
import { GetBasePath } from '../lib/path';

export const siteTitle = 'sfz';
export const siteDesc = 'A free and open format to create musical instruments from sound recordings';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta name="og:image" content={`${GetBasePath()}/images/digital-instruments.jpg`} />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap"
        rel="stylesheet"
      ></link>
      <link rel="apple-touch-icon" sizes="180x180" href={`${GetBasePath()}/icons/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${GetBasePath()}/icons/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${GetBasePath()}/icons/favicon-16x16.png`} />
      <link rel="manifest" href={`${GetBasePath()}/icons/site.webmanifest`}></link>
    </Head>
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href={`${GetBasePath()}/`} className={styles.headerLink}>
          <img
            className={styles.logoImage}
            src={`${GetBasePath()}/images/sfz-logo.svg`}
            alt={siteTitle}
            loading="lazy"
          />
        </a>
        <Navigation></Navigation>
      </div>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
