import styles from '../styles/components/grid-item.module.css';
import Link from 'next/link';
import { YamlInstrument } from '../pages/instruments';
import Image from 'next/image';
import instrumentImage from '../public/images/instrument.jpg';

type GridItemProps = {
  section: string;
  item: YamlInstrument;
  itemIndex: number;
};

const GridItem = ({ section, item, itemIndex }: GridItemProps) => (
  <Link className={styles.item} href={`/${section}/[itemId]`} as={`/${section}/${item.page}`}>
    <div className={styles.itemImage}>
      <Image src={instrumentImage} alt={item.name} layout="responsive"></Image>
    </div>
    <div className={styles.itemDetails}>
      <h3 className={styles.itemName}>{item.name}</h3>
      <p className={styles.itemAuthor}>By <span className={styles.itemLink}>{item.author}</span></p>
      <p className={styles.itemDesc}>
        { item.short_description && item.short_description.length > 105
          ? `${item.short_description.substring(0, 105)}...`
          : `${item.short_description}`
        }
      </p>
      <p className={styles.itemView}><span className={styles.itemLink}>View details</span></p>
    </div>
  </Link>
);

export default GridItem;
