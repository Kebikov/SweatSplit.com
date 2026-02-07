import style from './blocks.module.css';
// inner
import { Block_1 } from './ui/Block_1';
import { Block_2 } from './ui/Block_2';
import { Block_3 } from './ui/Block_3';
import { Block_4 } from './ui/Block_4';
import { Block_5 } from './ui/Block_5';
import { Block_6 } from './ui/Block_6';
import { Block_7 } from './ui/Block_7';
import { Block_8 } from './ui/Block_8';


const Blocks = () => {

    return (
        <div className={style.container} >
            <div className={style.content} >
                <Block_1/>
                <Block_2/>
                <Block_3/>
                <Block_4/>
                <Block_5/>
                <Block_6/>
                <Block_7/>
                <Block_8/>
            </div>
        </div>
    )
}


export default Blocks;