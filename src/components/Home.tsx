import React, {useState, useEffect} from 'react';
import style from './Home.module.css';

const Home:React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [styles, setStyles] = useState({
        titleContainer: {} as React.CSSProperties,
        title: {} as React.CSSProperties,
        title2: {} as React.CSSProperties,
        subTitle: {} as React.CSSProperties
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            const scrollPosition: number = window.scrollY; // 스크롤 위치
            const scroll: number = 600;

            // titleBorder
            const borderTransparency: number = Math.min(scrollPosition / scroll, 1);

            // titleTransparency
            const titleTransparency: number = 1 - Math.min((scrollPosition - scroll) / scroll, 1);
            const subTitleTransparency: number = (1 - Math.min((scrollPosition - scroll) / scroll, 1)) * (0.43 / 2);

            // titleWidth
            const titleWidth: number = 90 - Math.min(((scrollPosition - scroll - scroll) / scroll) * 60, 60);

            // titleBackgroundColor
            const titleBackgroundColorR: number = 255;
            const titleBackgroundColorG: number = 187 + Math.min(((scrollPosition - (scroll * 3)) / scroll) * 68, 68);
            const titleBackgroundColorB: number = 0 + Math.min(((scrollPosition - (scroll * 3)) / scroll) * 255, 255);

            setStyles({
                titleContainer: {
                    position: scrollPosition < scroll ? 'fixed' : undefined,
                    border: `2px solid rgba(4, 0, 77, ${borderTransparency})`,
                    width: scrollPosition < (scroll * 2) ? '90vw' : `${titleWidth}vw`,
                    backgroundColor: scrollPosition < (scroll * 3) ? undefined : `rgba(${titleBackgroundColorR}, ${titleBackgroundColorG}, ${titleBackgroundColorB}, ${borderTransparency})`,
                },
                title: {color: `rgba(4, 0, 77, ${titleTransparency})`},
                title2: {color: `rgba(94, 161, 255, ${titleTransparency})`},
                subTitle: {color: `rgba(251, 236, 182, ${subTitleTransparency})`}
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={style.home}>
            <div className={style.titleContainer} style={styles.titleContainer}>
                {scrollPosition <= 2400 ? (
                    <>
                    <div className={style.title} style={styles.title}>
                        <div>FRONT-END</div>
                        <div>DEV.</div>
                        <div className={style.title2} style={styles.title2}>PORTFOLIO</div>
                    </div>
                    <div className={style.subTitle} style={styles.subTitle}>
                        <div>YuSeung</div>
                        <div>Kim</div>
                    </div>
                    </>
                ) : (
                    <>
                    <div className={style.aboutTitle}>
                        <div>ABOUT</div>
                    </div>
                    <div className={style.aboutTitle2}>
                        <div>프론트엔드개발자</div>
                        <div>김유승</div>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;