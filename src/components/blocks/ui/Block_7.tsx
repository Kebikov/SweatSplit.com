import style from '../blocks.module.css';
import phone from '@/source/image/phone/7.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";


export const Block_7 = () => {

    return (
        <div className={style.block} >
            <div className={style.info} >
                <MotionText className={style.title} >
                    create<span> workouts quickly </span>with any images
                </MotionText>
                <MotionText className={style.description} >
                    Add an exercise using any image, then define sets, reps, weight, and rest time in seconds. Simple setup, full control.
                </MotionText>
            </div>
            <MotionImage src={phone} className={style.image} style={{aspectRatio: '500 / 863'}} alt='SweatSplit' />
        </div>
    )
}