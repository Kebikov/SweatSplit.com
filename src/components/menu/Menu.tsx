import styles from './menu.module.css';
import { useNavigate, useLocation } from 'react-router-dom';


const Menu = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname); //DELETE_THIS 
    return (
        <div className={styles.container} >
            {
                location.pathname !== '/'
                &&
                <div className={styles.link} onClick={() => navigate('/')} >Home</div>
            }
            {
                location.pathname !== '/support'
                &&
                <div className={styles.link} onClick={() => navigate('/support')} >Support</div>
            }
            {
                location.pathname !== '/privacy-policy'
                &&
                <div className={styles.link} onClick={() => navigate('/privacy-policy')} >Privacy Policy</div>
            }
        </div>
    )
}


export default Menu;