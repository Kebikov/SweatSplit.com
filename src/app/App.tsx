import { BrowserRouter, Routes, Route } from "react-router";
// app
import styles from '../css/app.module.css';
import '../localization/i18n';
import Main from './main/Main';
import Support from "./support/Support";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PrivacyPolicy from "./privacy-policy/PrivacyPolicy";
import SelectLocalization from "@/components/SelectLocalization/SelectLocalization";
import { ContexApp } from "@/context/hook/useContextInitialState";
import { useContextInitialState } from "@/context/hook/useContextInitialState";


const App = () => {

    const {stateContext, dispatchContext} = useContextInitialState();

    return (
        <ContexApp.Provider value={{stateContext, dispatchContext}} >
            <BrowserRouter>
                <div className={styles.wrapper} >
                    <SelectLocalization/>
                    <Header/>
                    <div className={styles.main} >
                        <Routes>
                            <Route path="/" element={<Main/>} />
                            <Route path="/support" element={<Support/>} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </ContexApp.Provider>
    )
}

export default App