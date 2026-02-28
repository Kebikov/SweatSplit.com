import { motion } from "motion/react";
import style from './topText.module.css';
import { useTranslation } from "react-i18next";
// app
import { MotionText } from "@/components/motionElemens";


const TopText = () => {

    const { t } = useTranslation(['[main]']);

    return (
        <div className={style.container} > 
            <MotionText className={style.subtitle} >
                {t('[main]:slogan.1')} <span>{t('[main]:slogan.2')}</span>
            </MotionText>
            <MotionText className={style.addText} >
                Create workouts your way. Build custom training plans, track progress, and stay in control of every exercise.
            </MotionText>
        </div>
    )
}


export default TopText;