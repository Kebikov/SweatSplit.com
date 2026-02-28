import style from '../blocks.module.css';
import phone from '@/source/image/phone/8.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";
import { useTranslation } from 'react-i18next';


export const Block_8 = () => {

    const {t} = useTranslation(['[main]']);

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.image} style={{aspectRatio: '500 / 863'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    <span>{t('[main]:Block_8.title.1')} </span>{t('[main]:Block_8.title.2')}
                </MotionText>
                <MotionText className={style.description} >
                    {t('[main]:Block_8.text')}
                </MotionText>
            </div>
        </div>
    )
}