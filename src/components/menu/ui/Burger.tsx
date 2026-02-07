import style from '../menu.module.css';
import cn from 'classnames';
import { FC } from 'react';

interface IBurger {
    onPress: () => void;
    isPress: boolean;
}


export const Burger: FC<IBurger> = ({
    onPress,
    isPress
}) => {

    return (
        <div 
            className={style.burger} 
            style={isPress ? {transform: 'translateX(200px)'} : {transform: 'translateX(0px)'}}
            onClick={onPress}  
        >
            <div className={cn(style.line, style.topLine)} />
            <div className={cn(style.line, style.middleLine)} />
            <div className={cn(style.line, style.bottomLine)} />
        </div>
    )
}