import styles from './button.module.css';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';


interface Ibutton {
    title: string;
    link: string;
}


const Button: FC<Ibutton> = ({
    title,
    link
}) => {

    const navigate = useNavigate();

    return (
        <div className={styles.button} onClick={() => navigate(link)} >
            {title}
        </div>
    )
}


export default Button;