import styles from './menu.module.css';
import { useState, useEffect } from 'react';
// inner
import { LinkMenu } from './ui/LinkMenu';
import { Burger } from './ui/Burger';
import { useTranslation } from 'react-i18next';


/** `//* Меню` */
const Menu = () => {

    const [isPress, setIsPress] = useState<boolean>(false);
    const {t} = useTranslation(['[common]']);

    useEffect(() => {
        const body = document.body;
        body.style.overflow = isPress ? 'hidden' : 'auto';
    }, [isPress]);

    return (
        <div className={styles.container} >
            <Burger onPress={() => setIsPress(true)} isPress={isPress} />
            <div className={styles.content} style={isPress ? {left: '0%'} : {left: '-100%'}}  onClick={() => setIsPress(false)} >
                <LinkMenu title={t('[common]:menu.home')} url='/' />
                <LinkMenu title={t('[common]:menu.support')} url='/support' />
                <LinkMenu title={t('[common]:menu.privacy_policy')} url='/privacy-policy' />
            </div>
        </div>
    )
}


export default Menu;