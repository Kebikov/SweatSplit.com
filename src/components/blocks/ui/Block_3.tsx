import style from '../blocks.module.css';
import phone from '@/source/image/phone/3.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";


export const Block_3 = () => {

    return (
        <div className={style.block} >
            <div className={style.info} >
                <MotionText className={style.title} >
                    create <span>interval workouts</span> your way
                </MotionText>
                <MotionText className={style.description} >
                    Take control of your interval training. Mix intensity, timing, and recovery to create workouts that fit your goals — not the other way around.
                </MotionText>
            </div>
            <MotionImage src={phone} className={style.image} style={{aspectRatio: '500 / 1049'}} alt='SweatSplit' />
        </div>
    )
}