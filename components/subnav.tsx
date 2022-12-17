import styles from '../styles/components/subnav.module.css';
import { GetBasePath, IsSelected } from '../lib/path';
import { YamlDocument } from '../lib/types';
import { useState } from 'react';

export type SubNavGroup = {
  name: string;
  items: YamlDocument[];
  root: string;
};

type SubNavProps = {
  groups: SubNavGroup[];
};

const SubNav = ({ groups }: SubNavProps) => {
  const [isOpen, setIsOpen] = useState<{[key: string]: boolean;}>({
    '/documentation/getting-started/': IsSelected('/documentation/getting-started/'),
    '/documentation/tutorials/': IsSelected('/documentation/tutorials/'),
    '/documentation/syntax/': IsSelected('/documentation/syntax/'),
  });

  const toggleSection = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const id: string = (e.target as HTMLHeadingElement).dataset.id || '';
    if (isOpen[id] === true) {
      setIsOpen(isOpen => ({
        ...isOpen,
        [id]: false
      }));
    } else {
      setIsOpen({
        [id]: true
      });
    }
    console.log('toggleSection', id, isOpen);
  }
  
  return (
    <div className={styles.subnav}>
      {groups.map((group: SubNavGroup) => (
        <div className={`${styles.subnavsection} ${isOpen[group.root] ? styles.subnavsectionActive : ''}`} key={group.name}>
          <h6 onClick={toggleSection} data-id={group.root}>{group.name}</h6>
          <ul className={styles.menu}>
            {group.items.map((item: YamlDocument) => (
              <li className={styles.menuItem} key={item.slug.join('_')}>
                <a
                  href={`${GetBasePath()}${group.root}${item.slug.join('/')}`}
                  className={`${styles.navItem} ${IsSelected(`${group.root}${item.slug}`) ? styles.navItemActive : ''}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SubNav;
