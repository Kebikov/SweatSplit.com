import style from '../blocks.module.css';
import phone from '@/source/image/phone/1.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";
import cn from 'classnames';


export const Block_1 = () => {

    return (
        <div className={style.block} >
            <div className={style.info} >
                <MotionText className={style.title} >
                    flexible workout <span>builder</span>
                </MotionText>
                <MotionText className={style.description} >
                    Create workouts that match your training style. Build and organize sessions by muscle groups, training days, or goals with full control over every exercise.
                </MotionText>
            </div>
            <MotionImage
                src={phone}
                className={style.image}
                style={{aspectRatio: '500 / 1166'}}
                alt='SweatSplit'
                info='Block_1 Image'
            />
        </div>
    )
}