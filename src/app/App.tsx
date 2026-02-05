import { BrowserRouter, Routes, Route } from "react-router"
import styles from '../css/app.module.css';
import Main from './main/Main';
import Support from "./support/Support";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


const App = () => {

    return (
        <BrowserRouter>
            <div className={styles.wrapper} >
                <Header/>
                <div className={styles.main} >
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/support" element={<Support/>} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App