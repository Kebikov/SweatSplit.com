import { useContext } from "react";
import { ContexApp } from "./useContextInitialState";


export const useContextApp = () => {
    const {stateContext, dispatchContext} = useContext(ContexApp);

    return {
        stateContext,
        dispatchContext
    }
}