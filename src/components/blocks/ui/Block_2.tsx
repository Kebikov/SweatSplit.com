import style from '../blocks.module.css';
import phone from '@/source/image/phone/2.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";
import { useTranslation } from 'react-i18next';


export const Block_2 = () => {

    const {t} = useTranslation(['[main]']);

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.imageВouble} style={{aspectRatio: '600 / 947'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    {t('[main]:Block_2.title.1')} <span>{t('[main]:Block_2.title.2')}</span>
                </MotionText>
                <MotionText className={style.description} >
                    {t('[main]:Block_2.text')}
                </MotionText>
            </div>
        </div>
    )
}