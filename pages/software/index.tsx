import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/list.module.css';
import softwareYaml from '../../data/software.yml';
import GridItem from '../../components/grid-item';
import MultiSelect from '../../components/multi-select';
import { includesValue, toSlug } from '../../lib/utils';
import { YamlApplication } from '../../lib/types';
import { getSoftware, getSoftwareCategories, getSoftwareLicenses, getSoftwarePlatforms } from '../../lib/api';

const Software = () => {
  const router = useRouter();

  const getSoftwareFiltered = () => {
    return getSoftware().filter((instrument: YamlApplication) => {
      return matchesFilters(instrument) ? instrument : false;
    });
  };

  const matchesFilters = (application: YamlApplication) => {
    if (router.query['category'] && !includesValue(router.query['category'], application.category)) return false;
    if (router.query['license'] && !includesValue(router.query['license'], application.license)) return false;
    // if (router.query['platform'] && includesValue(router.query['platform'], application.os)) return false;
    return true;
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Software</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>Software</h1>
        </div>
        <div className={styles.filters}>
          <span className={styles.filterTitle}>Filter by:</span>
          <MultiSelect label="Category" values={getSoftwareCategories()}></MultiSelect>
          <MultiSelect label="License" values={getSoftwareLicenses()}></MultiSelect>
          <MultiSelect label="Platform" values={getSoftwarePlatforms()}></MultiSelect>
        </div>
        <div className={styles.list}>
          {getSoftwareFiltered().map((application: YamlApplication, itemIndex: number) => (
            <GridItem
              section="software"
              item={application}
              itemIndex={itemIndex}
              key={`${application.slug}-${itemIndex}`}
            ></GridItem>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Software;
