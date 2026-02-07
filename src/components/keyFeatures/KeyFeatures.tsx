import settingsImg from '@/source/image/icon/settings.png';
import style from './keyFeatures.module.css';


const KeyFeatures = () => {

    return (
        <>
            <div className={style.settings} >
                <img src={settingsImg} className={style.settings__img} alt='#' />
                <div className={style.key} >KEY FEATURES</div>
            </div>
            <ul className={style.ul} >
                <li>Flexible workout builder with full control over exercises</li>
                <li>Progress tracking for workouts and individual exercises</li>
                <li>Interval training with custom time, weight, and rest for each set</li>
                <li>Visual barbell weight calculator for fast and accurate setup</li>
                <li>Exercise management inside workouts</li>
                <li>Multiple color themes to personalize the app</li>
                <li>Fast creation of custom exercises with your own images</li>
                <li>Intuitive controls designed for quick and efficient workout planning</li>
            </ul>
        </>
    )
}


export default KeyFeatures;