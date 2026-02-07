import style from '../blocks.module.css';
import phone from '@/source/image/phone/2.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";


export const Block_2 = () => {

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.imageВouble} style={{aspectRatio: '600 / 947'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    track your workout <span>progress</span>
                </MotionText>
                <MotionText className={style.description} >
                    Monitor your training progress with clear stats and visual insights. Track workouts, time, calories, volume, and muscle group balance all in one place.
                </MotionText>
            </div>
        </div>
    )
}