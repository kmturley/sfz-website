import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../../components/layout';
import styles from '../../../styles/instruments.module.css';
import instrumentsYaml from '../../../data/instruments.yml';
import { YamlCategory, YamlInstrument, YamlInstruments } from '..';
import { toSlug } from '../../../lib/utils';

const Instrument = () => {
  const router = useRouter();

  const getInstrument = (instrumentId: string) => {
    let match: YamlInstrument = (instrumentsYaml as YamlInstruments).categories[0].instruments[0];
    (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
      category.slug = toSlug(category.name);
      category.instruments.forEach((instrument: YamlInstrument) => {
        instrument.category = category.slug;
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
      <div className={styles.header}>
        <h2 className={styles.title}>{instrument.name}</h2>
      </div>
    </section>
  </Layout>
  )
}

export default Instrument;
