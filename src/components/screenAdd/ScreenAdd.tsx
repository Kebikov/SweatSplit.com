import styles from './screenAdd.module.css';
import screen1 from '@/source/image/screenAdd/EN-1.jpg';
import screen2 from '@/source/image/screenAdd/EN-2.jpg';
import screen3 from '@/source/image/screenAdd/EN-3.jpg';
import screen4 from '@/source/image/screenAdd/EN-4.jpg';
import screen5 from '@/source/image/screenAdd/EN-5.jpg';
import screen6 from '@/source/image/screenAdd/EN-6.jpg';
import screen7 from '@/source/image/screenAdd/EN-7.jpg';
import screen8 from '@/source/image/screenAdd/EN-8.jpg';
import MotionImg from '../motionImg/MotionImg';


const ScreenAdd = () => {

    return (
        <div className={styles.container} >
            <MotionImg src={screen1} />
            <MotionImg src={screen5} />
            <MotionImg src={screen4} />
            <MotionImg src={screen2} />

            <MotionImg src={screen3} />
            <MotionImg src={screen6} />
            <MotionImg src={screen7} />
            <MotionImg src={screen8} />
        </div>
    )
}


export default ScreenAdd;