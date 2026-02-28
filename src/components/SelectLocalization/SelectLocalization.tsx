import style from './selectLocalization.module.css';
import { useEffect } from 'react';
import { FLAG } from '@/source/image/flag';
import { useContextApp } from '@/context/hook/useContextApp';
// inner
import { OneLanguage } from './ui/OneLanguage';


/** `//* Выбор языка на весь экран` */
const SelectLocalization = () => {

    const {stateContext} = useContextApp();
    const isShowSelect = stateContext.isShowSelectLocalization;
    
    useEffect(() => {
        const body = document.body;
        body.style.overflow = isShowSelect ? 'hidden' : 'auto';
    }, [isShowSelect]);

    return (
        <div className={style.container} style={{opacity: isShowSelect ? 1 : 0, pointerEvents: isShowSelect ? 'auto' : 'none'}} >
            <div className={style.content} >
                <div className={style.what} >What is your language?</div>
                <OneLanguage title='English' value='en' image={FLAG.en} />
                <OneLanguage title='Polski' value='pl' image={FLAG.pl} />
                <OneLanguage title='Русский' value='ru' image={FLAG.ru} />
            </div>
        </div>
    )
}


export default SelectLocalization;