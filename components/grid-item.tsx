import styles from '../styles/components/grid-item.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { imageError } from '../lib/image';
import { YamlApplication, YamlInstrument } from '../lib/types';
import { toSlug } from '../lib/utils';
import { GetBasePath } from '../lib/path';

type GridItemProps = {
  section: string;
  item: YamlInstrument | YamlApplication;
  itemIndex: number;
};

const GridItem = ({ section, item, itemIndex }: GridItemProps) => (
  <Link
    className={styles.item}
    href={section === 'instruments' ? `/${section}/[authorId]/[instrumentId]/` : `/${section}/[applicationId]/`}
    as={section === 'instruments' ? `/${section}/${toSlug(item.author)}/${item.slug}/` : `/${section}/${item.slug}/`}
  >
    <div className={styles.itemImage}>
      <Image
        src={`https://sfzinstruments.github.io/assets/img/${toSlug(item.category)}/${item.slug}.jpg`}
        alt={item.name}
        width="300"
        height="200"
        data-base={GetBasePath()}
        data-section={section}
        onError={imageError}
      ></Image>
    </div>
    <div className={styles.itemDetails}>
      <h3 className={styles.itemName}>{item.name}</h3>
      <p className={styles.itemAuthor}>
        By <span className={styles.itemLink}>{item.author}</span>
      </p>
      <p className={styles.itemDesc}>
        {item.short_description && item.short_description.length > 105
          ? `${item.short_description.substring(0, 105)}...`
          : `${item.short_description}`}
      </p>
      <p className={styles.itemView}>
        <span className={styles.itemLink}>View details</span>
      </p>
    </div>
  </Link>
);

export default GridItem;
