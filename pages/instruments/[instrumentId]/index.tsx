import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../../components/layout';
import styles from '../../../styles/item.module.css';
import instrumentsYaml from '../../../data/instruments.yml';
import { YamlCategory, YamlInstrument, YamlInstruments } from '..';
import { toSlug } from '../../../lib/utils';
import Image from 'next/image';
import instrumentImage from '../../../public/images/instrument.jpg';
import Link from 'next/link';
import { GetBasePath } from '../../../lib/path';

const Instrument = () => {
  const router = useRouter();

  const getInstrument = (instrumentId: string) => {
    let match: YamlInstrument = (instrumentsYaml as YamlInstruments).categories[0].instruments[0];
    (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
      category.slug = toSlug(category.name);
      category.instruments.forEach((instrument: YamlInstrument) => {
        instrument.category = category.name;
        instrument.slug = toSlug(instrument.name);
        if (instrument.slug === instrumentId) match = instrument;
      })
    });
    return match;
  }

  const instrument: YamlInstrument = getInstrument(router.query.instrumentId as string);

  return (<Layout>
    <Head>
      <title>{siteTitle} - Instruments - {instrument.name}</title>
    </Head>
    <section className={styles.section}>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image className={styles.itemImageTag} src={instrumentImage} alt={instrument.name} fill></Image>
        </div>
        <div className={styles.itemDetails}>
          <h3 className={styles.itemName}>{instrument.name}</h3>
          <p className={styles.itemAuthor}>By <Link href={instrument.url} target="_blank" className={styles.itemLink}>{instrument.author}</Link></p>
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
            {/* <li className={styles.attribute}>
                <img
                    className={styles.icon}
                    src={`${GetBasePath()}/images/icon-cost.svg`}
                    alt="Cost"
                    loading="lazy"
                    />
                {instrument.cost}
            </li>
            <li className={styles.attribute}>
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
          {/* <audio src={instrument.audio} controls preload="true"></audio> */}
        </div>
        <div className={styles.fileDownloads}>
          {/* <p>{instrument.file}</p> */}
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default Instrument;
