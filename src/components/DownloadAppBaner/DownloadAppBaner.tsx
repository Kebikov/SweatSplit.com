import style from './downloadAppBaner.module.css';
import baner from '../../source/image/any/3.png';
import { MotionImage } from '@/components/motionElemens';


const DownloadAppBaner = () => {

    return (
        <div className={style.container} >
            <a href='https://apps.apple.com/app/sweatsplit/id6757947612' target="_blank" rel="noopener noreferrer" >
                <MotionImage src={baner} className={style.baner} style={{aspectRatio: '800 / 237'}} alt='SweatSplit' />
            </a>
        </div>
    )
}


export default DownloadAppBaner;