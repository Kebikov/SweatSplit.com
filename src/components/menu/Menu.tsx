import styles from './menu.module.css';
import { useState, useEffect } from 'react';
// inner
import { LinkMenu } from './ui/LinkMenu';
import { Burger } from './ui/Burger';


/** `//* Меню` */
const Menu = () => {

    const [isPress, setIsPress] = useState<boolean>(false);

    const onPress = () => setIsPress(state => !state);

    useEffect(() => {
        const body = document.body;
        body.style.overflow = isPress ? 'hidden' : 'auto';
    }, [isPress]);

    return (
        <div className={styles.container} >
            <Burger onPress={onPress} isPress={isPress} />
            <div className={styles.content} style={isPress ? {left: '0%'} : {left: '-100%'}}  onClick={onPress} >
                <LinkMenu title='Home' url='/' />
                <LinkMenu title='Support' url='/support' />
                <LinkMenu title='Privacy Policy' url='/privacy-policy' />
            </div>
        </div>
    )
}


export default Menu;