import { useEffect } from 'react';
import styles from '../styles/components/how-it-works.module.css';
import { GetBasePath } from '../lib/path';
import 'highlight.js/styles/vs2015.css';
import hljs from 'highlight.js';
import { CodeLineNumbers } from 'code-line-numbers';
import sfz from '../lib/highlight.js/sfz';
// import "code-line-numbers/dist/style.css";

const HowItWorks = () => {
  const init = false;
  useEffect(() => {
    hljs.registerLanguage('sfz', sfz);
    hljs.highlightAll();
    CodeLineNumbers.addCodeLineNumbers();
  });
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          How <img className={styles.logo} src={`${GetBasePath()}/images/sfz-logo.svg`} alt="sfz" loading="lazy" />{' '}
          works
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
              <pre>
                <span className="code-header">Orchestra.sfz</span>
                <code className="language-sfz">
                  {`  <group>
  lovel=0
  hivel=127

  <region> trigger=attack  pitch_keycenter=60 lokey=30 hikey=61 sample=./samples/C4.wav
  <region> trigger=attack  pitch_keycenter=62 lokey=62 hikey=63 sample=./samples/D4.wav
  <region> trigger=attack  pitch_keycenter=64 lokey=64 hikey=64 sample=./samples/E4.wav
  <region> trigger=attack  pitch_keycenter=65 lokey=65 hikey=66 sample=./samples/F4.wav`}
                </code>
              </pre>
              <img src={`${GetBasePath()}/images/arrow-down.svg`} alt="arrow down" loading="lazy" />
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
};

export default HowItWorks;
