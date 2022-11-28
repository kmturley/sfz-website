import styles from '../styles/components/navigation.module.css';
import { GetBasePath, IsSelected } from '../lib/path';

const Navigation = () => (
  <div className={styles.navigation}>
    <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
    <label className={styles.menuIcn} htmlFor="menu-btn">
      <span className={styles.menuNavIcn}></span>
    </label>
    <ul className={styles.menu}>
      <li>
        <a href={`${GetBasePath()}/instruments`} className={`${styles.navItem} ${IsSelected('/instruments')}`}>
          instruments
        </a>
      </li>
      <li>
        <a href={`${GetBasePath()}/players`} className={`${styles.navItem} ${IsSelected('/players')}`}>
          players
        </a>
      </li>
      <li>
        <a href={`${GetBasePath()}/tools`} className={`${styles.navItem} ${IsSelected('/tools')}`}>
          tools
        </a>
      </li>
      <li>
        <a href={`${GetBasePath()}/documentation`} className={`${styles.navItem} ${IsSelected('/documentation')}`}>
          documentation
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
