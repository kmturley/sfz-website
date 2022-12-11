import styles from '../styles/components/footer.module.css';
import { GetBasePath } from '../lib/path';
import Link from 'next/link';

const Footer = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <Link href="https://github.com/sfzformat" target="_blank" className={styles.link}>
        <img className={styles.image} src={`${GetBasePath()}/images/icon-github.svg`} alt="Discord" loading="lazy" />
      </Link>
      <Link href="https://discord.com/invite/t7nrZ6d" target="_blank" className={styles.link}>
        <img className={styles.image} src={`${GetBasePath()}/images/icon-discord.svg`} alt="Discord" loading="lazy" />
      </Link>
    </div>
  </section>
);

export default Footer;
