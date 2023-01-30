import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/list.module.css';
import GridItem from '../../components/grid-item';
import MultiSelect from '../../components/multi-select';
import { includesValue } from '../../lib/utils';
import { getInstrumentCategories, getInstrumentCosts, getInstrumentLicenses, getInstruments } from '../../lib/api';
import { YamlInstrument } from '../../lib/types';
import { ChangeEvent } from 'react';
import { GetBasePath } from '../../lib/path';

const Instruments = () => {
  const router = useRouter();

  const getInstrumentsFiltered = () => {
    return getInstruments().filter((instrument: YamlInstrument) => {
      return matchesFilters(instrument) ? instrument : false;
    });
  };

  const matchesFilters = (instrument: YamlInstrument) => {
    const search: string = router.query['search'] as string;
    if (router.query['category'] && !includesValue(router.query['category'], instrument.category)) return false;
    if (router.query['license'] && !includesValue(router.query['license'], instrument.license)) return false;
    if (
      router.query['cost'] &&
      ((router.query['cost'] === 'free' && instrument.license === 'Commercial') ||
        (router.query['cost'] === 'paid' && instrument.license !== 'Commercial'))
    )
      return false;
    if (
      router.query['search'] &&
      instrument.name?.toLowerCase().indexOf(search) === -1 &&
      instrument.short_description?.toLowerCase().indexOf(search) === -1 &&
      instrument.category?.indexOf(search) === -1
    )
      return false;
    // Currently there is not data for these two filters
    // if (router.query['compatibility'] && includesValue(router.query['compatibility'], instrument.compatibility)) return false;
    return true;
  };

  const onSearch = (event: ChangeEvent) => {
    const el: HTMLInputElement = event.target as HTMLInputElement;
    router.query['search'] = el.value ? el.value.toLowerCase() : '';
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  const instruments: YamlInstrument[] = getInstrumentsFiltered();
  const title: string = `${siteTitle} - Instruments`;
  const search: string = router.query['search'] as string;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="og:image" content={`${GetBasePath()}/images/instruments.jpg`} />
        <meta name="og:title" content={title} />
      </Head>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Instruments <span className={styles.count}>({instruments.length})</span>
          </h1>
        </div>
        <div className={styles.filters}>
          <span className={styles.filterTitle}>Filter by:</span>
          <MultiSelect label="Category" values={getInstrumentCategories()}></MultiSelect>
          <MultiSelect label="License" values={getInstrumentLicenses()}></MultiSelect>
          <MultiSelect label="Cost" values={getInstrumentCosts()}></MultiSelect>
          <input
            className={styles.search}
            placeholder="Keyword"
            type="search"
            id="search"
            name="search"
            value={search}
            onChange={onSearch}
          />
          {/* <MultiSelect label="Compatibility" values={getInstrumentCompatibilities()}></MultiSelect> */}
        </div>
        <div className={styles.list}>
          {instruments.map((instrument: YamlInstrument, itemIndex: number) => (
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
