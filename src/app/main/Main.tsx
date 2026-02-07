import styles from './main.module.css';
// app
import KeyFeatures from '@/components/keyFeatures/KeyFeatures';
import TopText from '@/components/topText/TopText';
import Blocks from '@/components/blocks/Blocks';


const  Main = () => {

    return (
        <div className={styles.container} >
            <TopText/>
            <Blocks/>
            <KeyFeatures/>
            <div className={styles.soon} >Opening soon!</div>
        </div>
    )
}

export default Main;