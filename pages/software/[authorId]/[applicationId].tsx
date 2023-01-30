import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../../../components/layout';
import styles from '../../../styles/item.module.css';
import { toSlug } from '../../../lib/utils';
import { GetBasePath } from '../../../lib/path';
import { getSoftware, getSoftwareApplication } from '../../../lib/api';
import { YamlApplication } from '../../../lib/types';
import { getImagePath, imageError } from '../../../lib/image';

type ApplicationProps = {
  application: YamlApplication;
};

const Application = ({ application }: ApplicationProps) => {
  const title: string = `${siteTitle} - Software - ${application.name}`;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={application.short_description || ''} />
        <meta
          name="og:image"
          content={getImagePath('software', GetBasePath(), toSlug(application.category), application.slug)}
        />
        <meta name="og:title" content={title} />
      </Head>
      <section className={styles.section}>
        <div className={styles.item}>
          <div className={styles.itemImage}>
            <Image
              className={styles.itemImageTag}
              src={getImagePath('software', GetBasePath(), toSlug(application.category), application.slug)}
              alt={application.name}
              data-base={GetBasePath()}
              data-section="software"
              onError={imageError}
              fill
            ></Image>
          </div>
          <div className={styles.itemDetails}>
            <h2 className={styles.itemName}>{application.name}</h2>
            <p className={styles.itemAuthor}>
              By{' '}
              <Link
                href={`/software/[authorId]/`}
                as={`/software/${toSlug(application.author)}/`}
                className={styles.itemLink}
              >
                {application.author}
              </Link>
            </p>
            <p className={styles.itemDesc}>{application.short_description}</p>
            <p>
              <Link href={application.url} target="_blank" className={styles.itemLink}>
                View website
              </Link>
            </p>
            <ul className={styles.attributes}>
              <li className={styles.attribute}>
                <img
                  className={styles.icon}
                  src={`${GetBasePath()}/images/icon-category.svg`}
                  alt="Category"
                  loading="lazy"
                />
                {application.category}
              </li>
              <li className={styles.attribute}>
                <img
                  className={styles.icon}
                  src={`${GetBasePath()}/images/icon-license.svg`}
                  alt="License"
                  loading="lazy"
                />
                {application.license}
              </li>
              <li className={styles.attribute}>
                <img className={styles.icon} src={`${GetBasePath()}/images/icon-cost.svg`} alt="Cost" loading="lazy" />
                {application.license === 'Commercial' ? 'Paid' : 'Free'}
              </li>
              <li className={styles.attribute}>
                <img
                  className={styles.icon}
                  src={`${GetBasePath()}/images/icon-platform.svg`}
                  alt="Platform"
                  loading="lazy"
                />
                {application.os.map((system: any, systemIndex: number) => (
                  <span key={`${toSlug(system.name)}-${systemIndex}`}>{system.name}, </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.files}>
          <div className={styles.filePreviews}>
            {/* <audio src={application.audio} controls preload="true"></audio> */}
          </div>
          <div className={styles.fileDownloads}>{/* <p>{application.file}</p> */}</div>
        </div>
      </section>
    </Layout>
  );
};

export default Application;

export async function getStaticPaths() {
  const paths: any = getSoftware().map((application: YamlApplication) => {
    return {
      params: {
        authorId: toSlug(application.author),
        applicationId: toSlug(application.name),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

type Params = {
  params: {
    authorId: string;
    applicationId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      application: getSoftwareApplication(params.applicationId),
    },
  };
}
