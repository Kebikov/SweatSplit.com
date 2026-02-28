import styles from './support.module.css';
import question from '@/source/image/icon/question.png';
import { MotionText } from "@/components/motionElemens";
import { useTranslation } from 'react-i18next';


const Support = () => {

    const {t} = useTranslation(['[common]']);

    return (
        <div className={styles.container} >
            <img src={question} className={styles.question} alt='#' />
            <MotionText className={styles.text} >
                {t('[common]:support_page.contact')}
            </MotionText>
            <MotionText className={styles.email} >
                kebikovgen@gmail.com
            </MotionText>
        </div>
    )
}


export default Support;