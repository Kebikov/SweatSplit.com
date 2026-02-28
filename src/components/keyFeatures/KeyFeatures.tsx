import settingsImg from '@/source/image/icon/settings.png';
import style from './keyFeatures.module.css';
import { useTranslation } from 'react-i18next';


const KeyFeatures = () => {

    const {t} = useTranslation(['[main]']);

    return (
        <>
            <div className={style.settings} >
                <img src={settingsImg} className={style.settings__img} alt='#' />
                <div className={style.key} >{t('[main]:KEY_FEATURES.title')}</div>
            </div>
            <ul className={style.ul} >
                <li>{t('[main]:KEY_FEATURES.1')}</li>
                <li>{t('[main]:KEY_FEATURES.2')}</li>
                <li>{t('[main]:KEY_FEATURES.3')}</li>
                <li>{t('[main]:KEY_FEATURES.4')}</li>
                <li>{t('[main]:KEY_FEATURES.5')}</li>
                <li>{t('[main]:KEY_FEATURES.6')}</li>
                <li>{t('[main]:KEY_FEATURES.7')}</li>
                <li>{t('[main]:KEY_FEATURES.8')}</li>
            </ul>
        </>
    )
}


export default KeyFeatures;