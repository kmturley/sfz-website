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
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (e: React.MouseEvent<HTMLDivElement>) => {
    const target: HTMLDivElement = (e.target as HTMLDivElement);
    const el: HTMLDivElement = target.nodeName === 'DIV' ? target : (target.parentNode as HTMLDivElement);
    const id: string = el.dataset.id || '';
    if (isOpen[id] === true) {
      setIsOpen((isOpen) => ({
        ...isOpen,
        [id]: false,
      }));
    } else {
      setIsOpen({
        [id]: true,
      });
    }
  };

  return (
    <div className={styles.subnav}>
      {groups.map((group: SubNavGroup) => (
        <div
          className={`${styles.subnavsection} ${isOpen[group.root] ? styles.subnavsectionOpen : ''} ${IsSelected(group.root) ? styles.subnavsectionSelected : ''}`}
          key={group.name}
        >
          <div className={styles.subnavHeader} onClick={toggleSection} data-id={group.root}>
            <h6>{group.name}</h6>
            <span className={styles.arrow}>
              &#8227;
            </span>
          </div>
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
