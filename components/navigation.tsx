import styles from '../styles/components/navigation.module.css';
import { getBasePath, isSelected } from '../lib/path';

const Navigation = () => (
  <div className={styles.navigation}>
    <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
    <label className={styles.menuIcn} htmlFor="menu-btn">
      <span className={styles.menuNavIcn}></span>
    </label>
    <ul className={styles.menu}>
      <li>
        <a href={`${getBasePath()}/instruments`} className={`${styles.navItem} ${isSelected('/instruments')}`}>
          instruments
        </a>
      </li>
      <li>
        <a href={`${getBasePath()}/players`} className={`${styles.navItem} ${isSelected('/players')}`}>
          players
        </a>
      </li>
      <li>
        <a href={`${getBasePath()}/tools`} className={`${styles.navItem} ${isSelected('/tools')}`}>
          tools
        </a>
      </li>
      <li>
        <a href={`${getBasePath()}/documentation`} className={`${styles.navItem} ${isSelected('/documentation')}`}>
          documentation
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
