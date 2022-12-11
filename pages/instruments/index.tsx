import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/list.module.css';
import GridItem from '../../components/grid-item';
import MultiSelect from '../../components/multi-select';
import { includesValue } from '../../lib/utils';
import { getInstrumentCategories, getInstrumentLicenses, getInstruments } from '../../lib/api';
import { YamlInstrument } from '../../lib/types';

const Instruments = () => {
  const router = useRouter();

  const getInstrumentsFiltered = () => {
    return getInstruments().filter((instrument: YamlInstrument) => {
      return matchesFilters(instrument) ? instrument : false;
    });
  };

  const matchesFilters = (instrument: YamlInstrument) => {
    if (router.query['category'] && !includesValue(router.query['category'], instrument.category)) return false;
    if (router.query['license'] && !includesValue(router.query['license'], instrument.license)) return false;
    // Currently there is not data for these two filters
    // if (router.query['cost'] && includesValue(router.query['cost'], instrument.cost)) return false;
    // if (router.query['compatibility'] && includesValue(router.query['compatibility'], instrument.compatibility)) return false;
    return true;
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Instruments</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>Instruments</h1>
        </div>
        <div className={styles.filters}>
          <span className={styles.filterTitle}>Filter by:</span>
          <MultiSelect label="Category" values={getInstrumentCategories()}></MultiSelect>
          <MultiSelect label="License" values={getInstrumentLicenses()}></MultiSelect>
          {/* <MultiSelect label="Cost" values={getInstrumentCosts()}></MultiSelect>
        <MultiSelect label="Compatibility" values={getInstrumentCompatibilities()}></MultiSelect> */}
        </div>
        <div className={styles.list}>
          {getInstrumentsFiltered().map((instrument: YamlInstrument, itemIndex: number) => (
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
  );
};

export default Instruments;
