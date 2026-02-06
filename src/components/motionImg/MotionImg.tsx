import { motion } from "motion/react";
import { FC } from "react";
import style from '@/components/screenAdd/screenAdd.module.css';


interface IMotionImg {
    src: string;
    delay?: number;
}


const MotionImg: FC<IMotionImg> = ({
    src,
    delay = 0
}) => {

    return (
        <motion.img 
            initial={{
                scale: .7,
                opacity: 0
            }}
            transition={{
                duration: .7,
                delay
            }}
            whileInView={{
                scale: 1,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            src={src} 
            className={style.screen} 
            alt='SweatSplit' 
        />
    )
}


export default MotionImg;