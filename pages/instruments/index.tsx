import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/instruments.module.css';
import instrumentsYaml from '../../data/instruments.yml';
import GridItem from '../../components/grid-item';
import MultiSelect from '../../components/multi-select';
import { toSlug } from '../../lib/utils';

export type YamlInstrument = {
  author: string;
  category?: string;
  license: string;
  name: string;
  page: string;
  short_description: string;
  url: string;
};

export type YamlCategory = {
  instruments: YamlInstrument[];
  name: string;
  page: string;
};

export type YamlInstruments = {
  categories: YamlCategory[];
};

const Instruments = () => {
  const router = useRouter();

  const getCategories = () => {
    return ['Basses','Brass','Drums','Folk','Guitars','Keyboards','Melodic Percussion','Misc','Orchestra','Percussion','Pianos','Strings','Synthesizers','Woodwinds'];
  }

  const getCompatibilities = () => {
    return ['Bassmidi','sforzando','sfizz'];
  }

  const getCosts = () => {
    return ['Free','$0-$9','$10-$29','$30-$49','$50+'];
  }

  const getInstruments = () => {
    const instruments: YamlInstrument[] = [];
    (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
      category.instruments.forEach((instrument: YamlInstrument) => {
        instrument.category = category.page;
        if (!matchesFilters(instrument)) return;
        instruments.push(instrument);
      })
    });
    return instruments;
  }

  const getLicenses = () => {
    return ['CC0','CC-BY-3.0','CC-BY-4.0','CC-BY-NC-SA-3.0','GPL-3.0','Other'];
  }

  const matchesFilters = (instrument: YamlInstrument) => {
    const params = router.query;
    console.log(params.license, instrument.license);
    if (params.category && !params.category.includes(toSlug(instrument.category || ''))) return false;
    if (params.license && !params.license.includes(toSlug(instrument.license || ''))) return false;
    // Currently there is not data for these two filters
    // if (params.cost && !params.cost.includes(instrument.cost || '')) return false;
    // if (params.compatibility && !params.compatibility.includes(instrument.compatibility || '')) return false;
    return true;
  }

  return (<Layout>
    <Head>
      <title>{siteTitle} - Instruments</title>
    </Head>
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Instruments</h2>
      </div>
      <div className={styles.filters}>
        <span className={styles.filterTitle}>Filter by:</span>
        <MultiSelect label="Category" values={getCategories()}></MultiSelect>
        <MultiSelect label="License" values={getLicenses()}></MultiSelect>
        <MultiSelect label="Cost" values={getCosts()}></MultiSelect>
        <MultiSelect label="Compatibility" values={getCompatibilities()}></MultiSelect>
      </div>
      <div className={styles.list}>
        {getInstruments().map((instrument: YamlInstrument, itemIndex: number) => (
          <GridItem
            section="instruments"
            item={instrument}
            itemIndex={itemIndex}
            key={`${instrument.page}-${itemIndex}`}
        ></GridItem>
        ))}
      </div>
    </section>
  </Layout>
  )
}

export default Instruments;
