import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/instruments.module.css';
import instrumentsYaml from '../../data/instruments.yml';
import GridItem from '../../components/grid-item';
import MultiSelect from '../../components/multi-select';

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
        instruments.push(instrument);
      })
    });
    return instruments;
  }

  const getLicenses = () => {
    return ['CC0','CC-BY-3.0','CC-BY-4.0','CC-BY-NC-SA-3.0','GPL-3.0','Other'];
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
