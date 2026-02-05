import styles from './main.module.css';
import logo from '@/source/image/logo/logo.png';
import ScreenAdd from '@/components/screenAdd/ScreenAdd';
import Button from '@/components/button/Button';


const  Main = () => {

    return (
        <div className={styles.container} >
            <img src={logo} className={styles.logo} alt='#' />
            <div className={styles.title} >SweatSplit</div>
            <div className={styles.subtitle} >Your workout <span>Your rules</span></div>
            <div className={styles.addText} >Create workouts your way. Build custom training plans, track progress, and stay in control of every exercise.</div>
            <ScreenAdd/>
            <div className={styles.key} >KEY FEATURES</div>
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
            <Button title='support' link={'/support'} />
            <div className={styles.soon} >Opening soon!</div>
        </div>
    )
}

export default Main;