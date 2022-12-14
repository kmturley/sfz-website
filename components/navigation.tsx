import styles from '../styles/components/navigation.module.css';
import { IsSelected } from '../lib/path';
import Link from 'next/link';

const Navigation = () => (
  <div className={styles.navigation}>
    <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
    <label className={styles.menuIcn} htmlFor="menu-btn">
      <span className={styles.menuNavIcn}></span>
    </label>
    <ul className={styles.menu}>
      <li>
        <Link
          href="/instruments/"
          className={`${styles.navItem} ${IsSelected('/instruments') ? styles.navItemActive : ''}`}
        >
          instruments
        </Link>
      </li>
      <li>
        <Link href="/software/" className={`${styles.navItem} ${IsSelected('/software') ? styles.navItemActive : ''}`}>
          software
        </Link>
      </li>
      <li>
        <Link
          href="/documentation/getting-started/what_is_sfz/"
          className={`${styles.navItem} ${IsSelected('/documentation') ? styles.navItemActive : ''}`}
        >
          documentation
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
