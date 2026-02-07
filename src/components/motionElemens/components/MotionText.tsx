import { motion, useInView, useAnimation } from "motion/react";
import { FC, useRef, useEffect } from "react";


interface IMotionText {
    children: React.ReactNode;
    className: string;
}


export const MotionText: FC<IMotionText> = ({
    children,
    className
}) => {

    const initialState = {y: 40, opacity: 0};
    const finishState = {y: 0, opacity: 1};

    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.9, once: true});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start(finishState).then(() => {});
    }, [isInView]);

    return (
        <motion.div 
            className={className}

            ref={ref}
            initial={initialState}
            transition={{duration: .7}}
            animate={controls}
        >
            {children}
        </motion.div>
    )
}