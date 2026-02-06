import styles from './main.module.css';
import ScreenAdd from '@/components/screenAdd/ScreenAdd';
import settingsImg from '@/source/image/icon/settings.png';
import { motion } from "motion/react";


const  Main = () => {

    return (
        <div className={styles.container} >
            <motion.div 
                className={styles.subtitle} 
                initial={{
                    y: 20,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: .7
                }}
            >
                Your workout <span>Your rules</span>
            </motion.div>
            <motion.div 
                className={styles.addText} 
                initial={{
                    y: 20,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: .7
                }}
            >
                Create workouts your way. Build custom training plans, track progress, and stay in control of every exercise.
            </motion.div>
            <ScreenAdd/>
            <div className={styles.settings} >
                <img src={settingsImg} className={styles.settings__img} alt='#' />
                <div className={styles.key} >KEY FEATURES</div>
            </div>
            <ul className={styles.ul} >
                <li>Flexible workout builder with full control over exercises</li>
                <li>Progress tracking for workouts and individual exercises</li>
                <li>Interval training with custom time, weight, and rest for each set</li>
                <li>Visual barbell weight calculator for fast and accurate setup</li>
                <li>Exercise management inside workouts</li>
                <li>Multiple color themes to personalize the app</li>
                <li>Fast creation of custom exercises with your own images</li>
                <li>Intuitive controls designed for quick and efficient workout planning</li>
            </ul>
            <div className={styles.soon} >Opening soon!</div>
        </div>
    )
}

export default Main;