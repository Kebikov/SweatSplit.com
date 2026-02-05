import styles from './support.module.css';
import Button from '@/components/button/Button';


const Support = () => {

    return (
        <div className={styles.container} >
            <div className={styles.text} >If you have any questions or issues, contact us:</div>
            <div className={styles.email} >kebikovgen@gmail.com</div>
            <Button title='home' link='/' />
        </div>
    )
}


export default Support;