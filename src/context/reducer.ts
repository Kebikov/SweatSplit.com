import { IStateContext, TActionContex } from "./types";


export const reducer = (stateContext: IStateContext, action: TActionContex): IStateContext => {
    
    switch (action.type) {
        //- Установка массива со статусами всех подходов в тренировке.
        case 'SET_IS_SHOW_SelectLocalization':
            return {...stateContext, isShowSelectLocalization: action.payload};
        default: return stateContext;
    }
}