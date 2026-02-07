import style from '../menu.module.css';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';


interface ILinkMenu {
    url: string;
    title: string;
}

export const LinkMenu: FC<ILinkMenu> = ({
    url,
    title
}) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className={style.link} onClick={() => navigate(url)} >{title}</div>
        </div>
        
    )
}