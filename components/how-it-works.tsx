import styles from '../styles/components/how-it-works.module.css';
import { GetBasePath } from '../lib/path';

const HowItWorks = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.title}>
        How <img className={styles.logo} src={`${GetBasePath()}/images/sfz-logo.svg`} alt="sfz" loading="lazy" /> works
      </h2>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.panel}>
            <span className={styles.number}>1</span>
            <p className={styles.description}>
              Sound recordings of instruments are split into individual audio files for quick access sampling.
            </p>
          </div>
          <div className={styles.diagram}>
            <img src={`${GetBasePath()}/images/sfz-samples.png`} alt="sfz samples" loading="lazy" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.panel}>
            <span className={styles.number}>2</span>
            <p className={styles.description}>
              Simple text codes in an .sfz file define when, and how the collection of samples should be played.
            </p>
          </div>
          <div className={styles.diagram}>
            <img src={`${GetBasePath()}/images/sfz-file.png`} alt="sfz file" loading="lazy" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.panel}>
            <span className={styles.number}>3</span>
            <p className={styles.description}>
              Midi input is processed by an sfz player and mapped audio samples are played back in realtime.
            </p>
          </div>
          <div className={styles.diagram}>
            <img src={`${GetBasePath()}/images/sfz-player.png`} alt="sfz player" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
