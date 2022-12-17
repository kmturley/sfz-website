import styles from '../styles/components/subnav.module.css';
import { GetBasePath, IsSelected } from '../lib/path';
import { YamlDocument } from '../lib/types';

export type SubNavGroup = {
  name: string;
  items: YamlDocument[];
  root: string;
};

type SubNavProps = {
  groups: SubNavGroup[];
};

const SubNav = ({ groups }: SubNavProps) => (
  <div className={styles.subnav}>
    { groups.map((group: SubNavGroup) => (
      <div className={styles.subnavsection}>
        <h6>{group.name}</h6>
        <ul className={styles.menu}>
          { group.items.map((item: YamlDocument) => (
              <li className={styles.menuItem} key={item.slug.join('_')}>
                <a href={`${GetBasePath()}${group.root}${item.slug.join('/')}`} className={`${styles.navItem} ${IsSelected(`/documentation/${item.slug}`) ? styles.navItemActive : ''}`}>
                  {item.title}
                </a>
              </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default SubNav;
