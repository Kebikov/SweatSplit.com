import { ActionDispatch } from "react";


export interface IStateContext {
    isShowSelectLocalization: boolean;
}


export interface ActionBoolean {
    type: 'SET_IS_SHOW_SelectLocalization';
    payload: boolean;
}

export type TActionContex = ActionBoolean;


export interface IContextApp {
    stateContext: IStateContext;
    dispatchContext: ActionDispatch<[action: TActionContex]>;
}