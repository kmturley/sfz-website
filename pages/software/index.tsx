import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/list.module.css';
import softwareYaml from '../../data/software.yml';
import GridItem from '../../components/grid-item';
import MultiSelect from '../../components/multi-select';
import { includesValue, toSlug } from '../../lib/utils';

export type YamlApplication = {
  slug: string;
  category: string;
  author: string;
  name: string;
  license: string;
  url: string;
  os: string[];
  short_description: string;
};

export type YamlSoftwareCategory = {
  slug: string;
  name: string;
  applications: YamlApplication[];
};

export type YamlSoftware = {
  categories: YamlSoftwareCategory[];
  os: string[];
};

const Software = () => {
  const router = useRouter();

  const getCategories = () => {
    return (softwareYaml as YamlSoftware).categories.map((category: YamlSoftwareCategory) => {
      return category.name;
    });
  }

  const getPlatforms = () => {
    return (softwareYaml as YamlSoftware).os.map((system: any) => {
      return system.name;
    });
  }

  const getSoftware = () => {
    const applications: YamlApplication[] = [];
    (softwareYaml as YamlSoftware).categories.forEach((category: YamlSoftwareCategory) => {
      category.slug = toSlug(category.name);
      category.applications.forEach((application: YamlApplication) => {
        application.category = category.name;
        application.slug = toSlug(application.name);
        if (!matchesFilters(application)) return;
        applications.push(application);
      })
    });
    return applications;
  }

  const getLicenses = () => {
    const licenses: string[] = [];
    (softwareYaml as YamlSoftware).categories.forEach((category: YamlSoftwareCategory) => {
      category.applications.forEach((application: YamlApplication) => {
        if (!application.license || licenses.includes(application.license)) return;
        licenses.push(application.license);
      })
    });
    return licenses;
  }

  const matchesFilters = (application: YamlApplication) => {
    if (router.query['category'] && !includesValue(router.query['category'], application.category)) return false;
    if (router.query['license'] && !includesValue(router.query['license'], application.license)) return false;
    // if (router.query['platform'] && includesValue(router.query['platform'], application.os)) return false;
    return true;
  }

  return (<Layout>
    <Head>
      <title>{siteTitle} - Software</title>
    </Head>
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Software</h1>
      </div>
      <div className={styles.filters}>
        <span className={styles.filterTitle}>Filter by:</span>
        <MultiSelect label="Category" values={getCategories()}></MultiSelect>
        <MultiSelect label="License" values={getLicenses()}></MultiSelect>
        <MultiSelect label="Platform" values={getPlatforms()}></MultiSelect>
      </div>
      <div className={styles.list}>
        {getSoftware().map((application: YamlApplication, itemIndex: number) => (
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
  )
}

export default Software;
