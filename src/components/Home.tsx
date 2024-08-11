import React from 'react';
import scroll from '../images/scroll.png';
import styles from './Home.module.css';

type HomeProps = {
    profileRef: React.RefObject<HTMLDivElement>;
};

const Home:React.FC<HomeProps> = ({profileRef}) => {
    const scrollToProfile = () => {
      profileRef.current?.scrollIntoView({ behavior: 'smooth'});
    };

    return (
        <div className={styles.home}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <div>FRONT-END</div>
                    <div>DEV.</div>
                    <div style={{fontSize:'20px', letterSpacing: '0.5em', color: '#5ea1ff'}}>PORTFOLIO</div>
                </div>
                <div className={styles.subTitle}>
                    YuSeung Kim
                </div>
            </div>
        </div>
    );
};

export default Home;