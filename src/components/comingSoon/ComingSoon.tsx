import style from './comingSoon.module.css';
import baner from '../../source/image/any/2.jpg';
import { MotionImage, MotionText } from '@/components/motionElemens';

const ComingSoon = () => {

    return (
        <div className={style.container} >
            <MotionText className={style.text} >Coming soon on the App Store</MotionText>
            <MotionImage src={baner} className={style.baner} style={{aspectRatio: '800 / 237'}} alt='SweatSplit' />
        </div>
    )
}


export default ComingSoon;