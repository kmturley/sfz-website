import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/instruments.module.css';
import instrumentsYaml from '../../data/instruments.yml';
import GridItem from '../../components/grid-item';
import MultiSelect from '../../components/multi-select';
import { includesValue, toSlug } from '../../lib/utils';

export type YamlInstrument = {
  author: string;
  category: string;
  license: string;
  name: string;
  short_description: string;
  slug: string;
  url: string;
};

export type YamlCategory = {
  slug: string;
  instruments: YamlInstrument[];
  name: string;
};

export type YamlInstruments = {
  categories: YamlCategory[];
};

const Instruments = () => {
  const router = useRouter();

  const getCategories = () => {
    return (instrumentsYaml as YamlInstruments).categories.map((category: YamlCategory) => {
      return category.name;
    });
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
      category.slug = toSlug(category.name);
      category.instruments.forEach((instrument: YamlInstrument) => {
        instrument.category = category.slug;
        instrument.slug = toSlug(instrument.name);
        if (!matchesFilters(instrument)) return;
        instruments.push(instrument);
      })
    });
    return instruments;
  }

  const getLicenses = () => {
    const licenses: string[] = [];
    (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
      category.instruments.forEach((instrument: YamlInstrument) => {
        if (!instrument.license || licenses.includes(instrument.license)) return;
        licenses.push(instrument.license);
      })
    });
    return licenses;
  }

  const matchesFilters = (instrument: YamlInstrument) => {
    if (router.query['category'] && !includesValue(router.query['category'], instrument.category)) return false;
    if (router.query['license'] && !includesValue(router.query['license'], instrument.license)) return false;
    // Currently there is not data for these two filters
    // if (router.query['cost'] && includesValue(router.query['cost'], instrument.cost)) return false;
    // if (router.query['compatibility'] && includesValue(router.query['compatibility'], instrument.compatibility)) return false;
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
        {/* <MultiSelect label="Cost" values={getCosts()}></MultiSelect>
        <MultiSelect label="Compatibility" values={getCompatibilities()}></MultiSelect> */}
      </div>
      <div className={styles.list}>
        {getInstruments().map((instrument: YamlInstrument, itemIndex: number) => (
          <GridItem
            section="instruments"
            item={instrument}
            itemIndex={itemIndex}
            key={`${instrument.slug}-${itemIndex}`}
        ></GridItem>
        ))}
      </div>
    </section>
  </Layout>
  )
}

export default Instruments;
