import styles from './header.module.css';
import logo from '@/source/image/logo/logo.png';
import Menu from '../menu/Menu';
import LocalizationFlag from '../LocalizationFlag/LocalizationFlag';


const LogoBox = () => {
    return (
        <div className={styles.logoBox} >
            <img src={logo} className={styles.logo} alt='#' />
            <div className={styles.title} >SweatSplit</div>
        </div>
    )
}

const Header = () => {
    return (
        <div className={styles.conteiner} >
            <div className={styles.content} >
                <div className={styles.box}>
                    <LogoBox/>
                    <LocalizationFlag/>
                </div>
                <Menu/>
            </div>
        </div>
    )
}


export default Header;