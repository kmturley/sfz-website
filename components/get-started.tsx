import styles from '../styles/components/get-started.module.css';
import { GetBasePath } from '../lib/path';
import Link from 'next/link';

const GetStarted = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.column}>
        <h2 className={styles.heading}>
          Get started with{' '}
          <img className={styles.logo} src={`${GetBasePath()}/images/sfz-logo.svg`} alt="sfz" loading="lazy" />
        </h2>
      </div>
      <div className={styles.column}>
        <p className={styles.item}>
          <Link href="/instruments/" className={styles.link}>
            Browse instruments <span className={styles.arrow}>&#8227;</span>
          </Link>
        </p>
        <p className={styles.item}>
          <Link href="/software/" className={styles.link}>
            Install software <span className={styles.arrow}>&#8227;</span>
          </Link>
        </p>
        <p className={styles.item}>
          <Link href="/documentation/getting-started/what_is_sfz/" className={styles.link}>
            Create instruments <span className={styles.arrow}>&#8227;</span>
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default GetStarted;
