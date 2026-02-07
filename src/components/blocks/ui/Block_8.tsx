import style from '../blocks.module.css';
import phone from '@/source/image/phone/8.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";


export const Block_8 = () => {

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.image} style={{aspectRatio: '500 / 863'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    <span>manage exercises </span>with ease
                </MotionText>
                <MotionText className={style.description} >
                    Organize your workout effortlessly. Reorder exercises, edit details, or remove them in seconds with simple gestures.
                </MotionText>
            </div>
        </div>
    )
}