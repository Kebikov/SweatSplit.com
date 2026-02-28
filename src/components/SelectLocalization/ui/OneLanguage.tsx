import { FC } from 'react';
import i18n from '@/localization/i18n';
// app
import style from '../selectLocalization.module.css';
import { useContextApp } from '@/context/hook/useContextApp';
import { TLanguage } from '@/localization/types/language';


interface ILng {
    title: string;
    image: string;
    value: TLanguage;
}


/** `//* Флаг с названием языка` */
export const OneLanguage: FC<ILng> = ({
    title,
    image,
    value
}) => {

    const {dispatchContext} = useContextApp();

    const onPress = async () => {
        await i18n.changeLanguage(value);
        dispatchContext({type: 'SET_IS_SHOW_SelectLocalization', payload: false});
    }

    return (
        <div className={style.lng} onClick={onPress}>
            <img src={image} className={style.image} />
            <div className={style.title} >{title}</div>
        </div>
    )
}