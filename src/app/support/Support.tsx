import styles from './support.module.css';
import question from '@/source/image/icon/question.png';


const Support = () => {

    return (
        <div className={styles.container} >
            <img src={question} className={styles.question} alt='#' />
            <div className={styles.text} >If you have any questions or issues, contact us:</div>
            <div className={styles.email} >kebikovgen@gmail.com</div>
        </div>
    )
}


export default Support;