import styles from '../styles/components/banner.module.css';
import { GetBasePath } from '../lib/path';

const Banner = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <p>
        <img className={styles.sfzLogo} src={`${GetBasePath()}/images/sfz-logo.svg`} alt="sfz" loading="lazy" /> is a
        free and open format to create musical instruments from sound recordings
      </p>
    </div>
  </section>
);

export default Banner;
