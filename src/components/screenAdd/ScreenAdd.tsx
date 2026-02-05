import styles from './screenAdd.module.css';
import screen1 from '@/source/image/screenAdd/EN-1.jpg';
import screen2 from '@/source/image/screenAdd/EN-2.jpg';
import screen3 from '@/source/image/screenAdd/EN-3.jpg';
import screen4 from '@/source/image/screenAdd/EN-4.jpg';
import screen5 from '@/source/image/screenAdd/EN-5.jpg';
import screen6 from '@/source/image/screenAdd/EN-6.jpg';
import screen7 from '@/source/image/screenAdd/EN-7.jpg';
import screen8 from '@/source/image/screenAdd/EN-8.jpg';

const ScreenAdd = () => {

    return (
        <div className={styles.container} >
            <img src={screen1} className={styles.screen} alt='SweatSplit' />
            <img src={screen5} className={styles.screen} alt='SweatSplit' />
            <img src={screen4} className={styles.screen} alt='SweatSplit' />
            <img src={screen2} className={styles.screen} alt='SweatSplit' />
            <img src={screen3} className={styles.screen} alt='SweatSplit' />
            <img src={screen6} className={styles.screen} alt='SweatSplit' />
            <img src={screen7} className={styles.screen} alt='SweatSplit' />
            <img src={screen8} className={styles.screen} alt='SweatSplit' />
        </div>
    )
}


export default ScreenAdd;