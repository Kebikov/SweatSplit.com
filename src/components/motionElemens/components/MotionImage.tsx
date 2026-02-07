import { motion, useInView, useAnimation } from "motion/react";
import { FC, type CSSProperties, useRef, useEffect } from "react";


interface IMotionImage {
    src: string;
    className: string;
    style: CSSProperties;
    alt: string;
    info?: string;
}


export const MotionImage: FC<IMotionImage> = ({
    src,
    className,
    style,
    alt,
    info
}) => {

    const initialState = {scale: .8, opacity: 0};
    const finishState = {scale: 1, opacity: 1};

    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.3, once: true});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log("Элемент вошёл в viewport > ", info);
            controls.start(finishState).then(() => {});
        }
    }, [isInView]);

    return (
        <motion.img 
            src={src}
            className={className}
            style={style}
            alt={alt}

            ref={ref}
            initial={initialState}
            animate={controls}
            transition={{duration: 1}}
        />
    )
}