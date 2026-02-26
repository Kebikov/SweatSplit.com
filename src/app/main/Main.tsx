import styles from './main.module.css';
// app
import KeyFeatures from '@/components/keyFeatures/KeyFeatures';
import TopText from '@/components/topText/TopText';
import Blocks from '@/components/blocks/Blocks';
import DownloadAppBaner from '@/components/DownloadAppBaner/DownloadAppBaner';


const  Main = () => {

    return (
        <div className={styles.container} >
            <TopText/>
            <DownloadAppBaner/>
            <Blocks/>
            <KeyFeatures/>
            <DownloadAppBaner/>
        </div>
    )
}

export default Main;