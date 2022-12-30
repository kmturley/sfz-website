import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../../../components/layout';
import styles from '../../../styles/item.module.css';
import { toSlug } from '../../../lib/utils';
import instrumentImage from '../../../public/images/instrument.jpg';
import { GetBasePath } from '../../../lib/path';
import { getInstrument, getInstruments } from '../../../lib/api';
import { YamlInstrument, YamlInstrumentDownload } from '../../../lib/types';

type InstrumentProps = {
  instrument: YamlInstrument;
};

const Instrument = ({ instrument }: InstrumentProps) => {
  const title: string = `${siteTitle} - Instruments - ${instrument.name}`;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.item}>
          <div className={styles.itemImage}>
            <Image className={styles.itemImageTag} src={instrumentImage} alt={instrument.name} fill></Image>
          </div>
          <div className={styles.itemDetails}>
            <h2 className={styles.itemName}>{instrument.name}</h2>
            <p className={styles.itemAuthor}>
              By{' '}
              <Link href={instrument.url} target="_blank" className={styles.itemLink}>
                {instrument.author}
              </Link>
            </p>
            <p className={styles.itemDesc}>{instrument.short_description}</p>
            <ul className={styles.attributes}>
              <li className={styles.attribute}>
                <img
                  className={styles.icon}
                  src={`${GetBasePath()}/images/icon-category.svg`}
                  alt="Category"
                  loading="lazy"
                />
                {instrument.category}
              </li>
              <li className={styles.attribute}>
                <img
                  className={styles.icon}
                  src={`${GetBasePath()}/images/icon-license.svg`}
                  alt="License"
                  loading="lazy"
                />
                {instrument.license}
              </li>
              <li className={styles.attribute}>
                <img className={styles.icon} src={`${GetBasePath()}/images/icon-cost.svg`} alt="Cost" loading="lazy" />
                Free
              </li>
              {/* <li className={styles.attribute}>
              <img
                className={styles.icon}
                src={`${GetBasePath()}/images/icon-compatibility.svg`}
                alt="Compatibility"
                loading="lazy"
                />
              {instrument.compatibility}
            </li> */}
            </ul>
          </div>
        </div>
        <div className={styles.files}>
          <div className={styles.filePreviews}>
            <h4>Preview</h4>
            <audio
              className={styles.filePreviewAudio}
              src={`https://sfzinstruments.github.io/assets/audio/${toSlug(instrument.category)}/${
                instrument.page
              }.mp3`}
              controls
              preload="true"
            ></audio>
          </div>
          <div className={styles.fileDownloads}>
            <h4>Download</h4>
            {instrument.downloads
              ? instrument.downloads.map((download: YamlInstrumentDownload) => (
                  <Link href={download.url} target="_blank" className={styles.fileDownload} key={toSlug(download.url)}>
                    <div className={styles.fileDownloadName}>{download.label}</div>
                    <div className={styles.fileDownloadFormat}>
                      {download.format}, {download.samplerate}Khz, {download.size}
                    </div>
                    <img
                      className={styles.fileDownloadIcon}
                      src={`${GetBasePath()}/images/icon-download.svg`}
                      alt="Download"
                      loading="lazy"
                    />
                  </Link>
                ))
              : ''}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Instrument;

export async function getStaticPaths() {
  const paths: any = getInstruments().map((instrument: YamlInstrument) => {
    return {
      params: {
        instrumentId: toSlug(instrument.name),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

type Params = {
  params: {
    instrumentId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      instrument: getInstrument(params.instrumentId),
    },
  };
}
