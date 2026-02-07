import style from '../blocks.module.css';
import phone from '@/source/image/phone/6.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";


export const Block_6 = () => {

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.imageВouble} style={{aspectRatio: '500 / 873'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    choose your<span> color theme</span>
                </MotionText>
                <MotionText className={style.description} >
                    Personalize the app with multiple color themes to match your style, environment, and training focus. Train in an interface that feels comfortable and clear every time.
                </MotionText>
            </div>
        </div>
    )
}