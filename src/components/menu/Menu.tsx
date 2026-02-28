import styles from './menu.module.css';
import { useState, useEffect } from 'react';
// inner
import { LinkMenu } from './ui/LinkMenu';
import { Burger } from './ui/Burger';


/** `//* Меню` */
const Menu = () => {

    const [isPress, setIsPress] = useState<boolean>(false);

    useEffect(() => {
        const body = document.body;
        body.style.overflow = isPress ? 'hidden' : 'auto';
    }, [isPress]);

    return (
        <div className={styles.container} >
            <Burger onPress={() => setIsPress(true)} isPress={isPress} />
            <div className={styles.content} style={isPress ? {left: '0%'} : {left: '-100%'}}  onClick={() => setIsPress(false)} >
                <LinkMenu title='Home' url='/' />
                <LinkMenu title='Support' url='/support' />
                <LinkMenu title='Privacy Policy' url='/privacy-policy' />
            </div>
        </div>
    )
}


export default Menu;