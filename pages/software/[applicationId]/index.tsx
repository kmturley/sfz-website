import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../../components/layout';
import styles from '../../../styles/item.module.css';
import { YamlApplication } from '..';
import { toSlug } from '../../../lib/utils';
import Image from 'next/image';
import applicationImage from '../../../public/images/application.jpg';
import Link from 'next/link';
import { GetBasePath } from '../../../lib/path';
import { getApplication, getApplications } from '../../../lib/api';

type ApplicationProps = {
  application: YamlApplication;
};

const Application = ({application}: ApplicationProps) => {
  return <Layout>
    <Head>
      <title>{siteTitle} - Software - {application.name}</title>
    </Head>
    <section className={styles.section}>
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <Image className={styles.itemImageTag} src={applicationImage} alt={application.name} fill></Image>
        </div>
        <div className={styles.itemDetails}>
          <h3 className={styles.itemName}>{application.name}</h3>
          <p className={styles.itemAuthor}>By <Link href={application.url} target="_blank" className={styles.itemLink}>{application.author}</Link></p>
          <p className={styles.itemDesc}>{application.short_description}</p>
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
        <div className={styles.fileDownloads}>
          {/* <p>{application.file}</p> */}
        </div>
      </div>
    </section>
  </Layout>
}

export default Application;

export async function getStaticPaths() {
  const paths: any = getApplications().map((application: YamlApplication) => {
    return {
      params: {
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
    applicationId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      application: getApplication(params.applicationId)
    },
  };
}
