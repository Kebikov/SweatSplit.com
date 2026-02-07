import { motion } from "motion/react";
import style from './topText.module.css';
// app
import { MotionText } from "@/components/motionElemens";


const TopText = () => {

    return (
        <div className={style.container} > 
            <MotionText className={style.subtitle} isAnimate info="Your workout" >
                Your workout <span>Your rules</span>
            </MotionText>
            <MotionText className={style.addText} isAnimate info="Create workouts your way.">
                Create workouts your way. Build custom training plans, track progress, and stay in control of every exercise.
            </MotionText>
        </div>
    )
}


export default TopText;