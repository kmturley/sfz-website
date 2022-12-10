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
        <Link href="/instruments" className={`${styles.navItem} ${IsSelected('/instruments')}`}>
          instruments
        </Link>
      </li>
      <li>
        <Link href="/players" className={`${styles.navItem} ${IsSelected('/players')}`}>
          players
        </Link>
      </li>
      <li>
        <Link href="/tools" className={`${styles.navItem} ${IsSelected('/tools')}`}>
          tools
        </Link>
      </li>
      <li>
        <Link href="/documentation" className={`${styles.navItem} ${IsSelected('/documentation')}`}>
          documentation
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
