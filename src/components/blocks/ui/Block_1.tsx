import style from '../blocks.module.css';
import phone from '@/source/image/phone/1.jpg';
import { MotionText, MotionImage } from "@/components/motionElemens";
import { useTranslation } from 'react-i18next';


export const Block_1 = () => {

    const {t} = useTranslation(['[main]']);

    return (
        <div className={style.block} >
            <div className={style.info} >
                <MotionText className={style.title} >
                    {t('[main]:Block_1.title.1')} <span>{t('[main]:Block_1.title.2')}</span>
                </MotionText>
                <MotionText className={style.description} >
                    {t('[main]:Block_1.text')}
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