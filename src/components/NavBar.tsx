import React from 'react';
import styles from './NavBar.module.css';

type Props = {
    onScrollToHome: () => void;
    onScrollToPortfolio: () => void;
    onScrollToContact: () => void;
}

const NavBar: React.FC<Props> = ({ onScrollToHome, onScrollToPortfolio, onScrollToContact }) => {
    return (
      <nav className={styles.nav}>
        <ul className={`${styles.navList} ${styles.navItemL}`}>
          <li>
            <div onClick={onScrollToHome}>
              KYS's Portfolio
            </div>
          </li>
        </ul>
        <ul className={`${styles.navList} ${styles.navItemR}`}>
          <li>
            <div onClick={onScrollToPortfolio}>
              Portfolio
            </div>
          </li>
          <li>
            <div onClick={onScrollToContact}>
              Contact
            </div>
          </li>
        </ul>
      </nav>
    );
  };

export default NavBar;