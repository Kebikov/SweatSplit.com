import { BrowserRouter, Routes, Route } from "react-router"
import styles from '../css/app.module.css';
import Main from './main/Main';
import Support from "./support/Support";


const App = () => {

    return (
        <BrowserRouter>
            <div className={styles.wrapper} >
                <div className={styles.main} >
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/support" element={<Support/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App