// app
import style from './localization.module.css';
import { useContextApp } from '@/context/hook/useContextApp';
// inner
import { useFlag } from './hook/useFlag';


/** `//* Флаг с языком возле логотипа.` */
const LocalizationFlag = () => {

    const {dispatchContext} = useContextApp();
    const {flag} = useFlag();

    const onPress = () => dispatchContext({type: 'SET_IS_SHOW_SelectLocalization', payload: true});

    return (
        <div className={style.container} onClick={onPress} >
            <div className={style.content} >
                <img src={flag} className={style.flag} />
            </div>
        </div>
    )
}


export default LocalizationFlag;