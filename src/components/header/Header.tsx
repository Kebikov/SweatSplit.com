import styles from './header.module.css';
import logo from '@/source/image/logo/logo.png';
import Menu from '../menu/Menu';

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
            <LogoBox/>
            <Menu/>
        </div>
    )
}


export default Header;