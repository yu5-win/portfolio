import React from 'react';
import styles from './NavBar.module.css';

type Props = {
    isNavBarAtProfile: boolean;
    onScrollToHome: () => void;
    onScrollToProfile: () => void;
    onScrollToContact: () => void;
}

const NavBar: React.FC<Props> = ({ isNavBarAtProfile, onScrollToHome, onScrollToProfile, onScrollToContact }) => {
    return (
      <nav className={`${styles.nav} ${isNavBarAtProfile ? styles.navAtProfile : ''}`}>
        <ul className={`${styles.navList} ${styles.navItemL}`}>
          <li>
            <div onClick={onScrollToHome} className={styles.navHome}>
              KYS's Portfolio
            </div>
          </li>
        </ul>
        <ul className={`${styles.navList} ${styles.navItemR}`}>
          <li>
            <div onClick={onScrollToProfile} className={`${styles.navItem} ${isNavBarAtProfile ? styles.navAtProfileFont : ''}`}>
              Profile
            </div>
          </li>
          <li>
            <div onClick={onScrollToContact} className={`${styles.navItem} ${isNavBarAtProfile ? styles.navAtProfileFont : ''}`}>
              Contact
            </div>
          </li>
        </ul>
      </nav>
    );
  };

export default NavBar;