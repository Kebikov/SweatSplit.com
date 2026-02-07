import style from '../blocks.module.css';
import phone from '@/source/image/phone/5.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";


export const Block_5 = () => {

    return (
        <div className={style.block} >
            <div className={style.info} >
                <MotionText className={style.title} >
                    flexible<span> workout builder</span>
                </MotionText>
                <MotionText className={style.description} >
                    Plan your workout your way. Add exercises, manage sets and reps, track weight, and control rest timers in a simple, focused interface.
                </MotionText>
            </div>
            <MotionImage src={phone} className={style.image} style={{aspectRatio: '500 / 1055'}} alt='SweatSplit' />
        </div>
    )
}