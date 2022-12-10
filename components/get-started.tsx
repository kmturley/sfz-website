import styles from '../styles/components/get-started.module.css';
import { GetBasePath } from '../lib/path';
import Link from 'next/link';

const GetStarted = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.column}>
        <h3>Get started with <img
          className={styles.logo}
          src={`${GetBasePath()}/images/sfz-logo.svg`}
          alt="sfz"
          loading="lazy"
          /></h3>
       </div>
       <div className={styles.column}>
          <p className={styles.item}><Link href="/instruments" className={styles.link}>Browse instruments <span className={styles.arrow}>&#8227;</span></Link></p>
          <p className={styles.item}><Link href="/players" className={styles.link}>Install a player <span className={styles.arrow}>&#8227;</span></Link></p>
          <p className={styles.item}><Link href="/documentation" className={styles.link}>Create instruments <span className={styles.arrow}>&#8227;</span></Link></p>
       </div>
    </div>
  </section>
);

export default GetStarted;
