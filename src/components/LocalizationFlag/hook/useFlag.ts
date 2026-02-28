import { useState, useEffect } from 'react';
// app
import { FLAG } from '@/source/image/flag';
import { TLanguage } from '@/localization/types/language';
import { useContextApp } from '@/context/hook/useContextApp';


/** `//* Установка текушего флага языка` */
export const useFlag = () => {

    const {stateContext} = useContextApp();
    const [currentLanguage, setCurrentLanguage] = useState<TLanguage>('en');

    let flag: string = '';
    switch(currentLanguage) {
        case 'ru':
            flag = FLAG.ru;
            break;
        case 'en':
            flag = FLAG.en;
            break;
        case 'pl':
            flag = FLAG.pl;
            break;
    }

    useEffect(() => {
        const lng = localStorage.getItem('language') as TLanguage | null;
        if(lng) setCurrentLanguage(lng);
    }, [stateContext.isShowSelectLocalization]);

    return {
        flag
    }
}