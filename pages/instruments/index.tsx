import Head from 'next/head';
import Banner from '../../components/banner';
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
        <select className={styles.filterDropdown} name="category" id="category">
          <option value="">Category</option>
          <option value="basses">&#9744;Basses</option>
          <option value="brass">Brass</option>
        </select>
        <select className={styles.filterDropdown} name="license" id="license">
          <option value="">License</option>
          <option value="cc0">CC0</option>
          <option value="cc-by-30">CC-BY-3.0</option>
        </select>
        <select className={styles.filterDropdown} name="cost" id="cost">
          <option value="">Cost</option>
          <option value="free">Free</option>
          <option value="0-9">$0-$9</option>
        </select>
        <select className={styles.filterDropdown} name="compatibility" id="compatibility">
          <option value="">Compatibility</option>
          <option value="bassmidi">Bassmidi</option>
          <option value="sforzando">sforzando</option>
        </select>
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
