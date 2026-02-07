import style from '../blocks.module.css';
import phone from '@/source/image/phone/4.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";


export const Block_4 = () => {

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.image} style={{aspectRatio: '500 / 897'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    easy<span> weight setup </span>& calculation
                </MotionText>
                <MotionText className={style.description} >
                    Set your working weight in seconds with a visual barbell calculator. Add plates, adjust the bar, and get precise totals instantly no mental math, no mistakes.
                </MotionText>
            </div>
        </div>
    )
}