import styles from './support.module.css';
import question from '@/source/image/icon/question.png';
import { motion } from 'motion/react';
import { MotionText, MotionImage } from "@/components/motionElemens";


const Support = () => {

    return (
        <div className={styles.container} >
            <img src={question} className={styles.question} alt='#' />
            <MotionText className={styles.text} >
                If you have any questions or issues, contact us:
            </MotionText>
            <MotionText className={styles.email} >
                kebikovgen@gmail.com
            </MotionText>
        </div>
    )
}


export default Support;