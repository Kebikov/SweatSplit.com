import style from '../blocks.module.css';
import phone from '@/source/image/phone/4.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";
import { useTranslation } from 'react-i18next';


export const Block_4 = () => {

    const {t} = useTranslation(['[main]']);

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.image} style={{aspectRatio: '500 / 897'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    {t('Block_4.title.1')}<span> {t('Block_4.title.2')} </span>{t('Block_4.title.3')}
                </MotionText>
                <MotionText className={style.description} >
                    {t('Block_4.text')}
                </MotionText>
            </div>
        </div>
    )
}