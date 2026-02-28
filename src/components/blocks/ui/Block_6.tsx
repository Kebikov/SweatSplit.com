import style from '../blocks.module.css';
import phone from '@/source/image/phone/6.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";
import { useTranslation } from 'react-i18next';


export const Block_6 = () => {

    const {t} = useTranslation(['[main]']);

    return (
        <div className={style.block} >
            <MotionImage src={phone} className={style.imageВouble} style={{aspectRatio: '500 / 873'}} alt='SweatSplit' />
            <div className={style.info} >
                <MotionText className={style.title} >
                    {t('[main]:Block_6.title.1')}<span> {t('[main]:Block_6.title.2')}</span>
                </MotionText>
                <MotionText className={style.description} >
                    {t('[main]:Block_6.text')}
                </MotionText>
            </div>
        </div>
    )
}