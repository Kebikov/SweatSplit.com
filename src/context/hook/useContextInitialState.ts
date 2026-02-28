import { createContext, useReducer } from "react";
// app
// inner
import { initialState } from "../initialState";
import { reducer } from "../reducer";
import { IContextApp } from "../types";



export const ContexApp = createContext<IContextApp>({stateContext: initialState, dispatchContext: () => {}});


/** `//* Hook для установки начальных данных, где все подходы еще не выполненны. И установка начального состояния таймера при начале тренировки.` */
export const useContextInitialState = () => {

    const [stateContext, dispatchContext] = useReducer(reducer, initialState);

    return {
        dispatchContext,
        stateContext
    }
}
