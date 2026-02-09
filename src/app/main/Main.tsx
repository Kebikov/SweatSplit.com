import styles from './main.module.css';
// app
import KeyFeatures from '@/components/keyFeatures/KeyFeatures';
import TopText from '@/components/topText/TopText';
import Blocks from '@/components/blocks/Blocks';
import ComingSoon from '@/components/comingSoon/ComingSoon';


const  Main = () => {

    return (
        <div className={styles.container} >
            <TopText/>
            <ComingSoon/>
            <Blocks/>
            <KeyFeatures/>
        </div>
    )
}

export default Main;