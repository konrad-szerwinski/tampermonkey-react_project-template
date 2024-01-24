import { createContext, useContext, useReducer } from 'react';

export const MainContext = createContext<MainContextProps>(null);

interface MainContextProps {
    items: Array<string>,
    dispatch: React.Dispatch<ReducerAction>
}

interface ReducerAction {
    type: 'append' | 'remove',
    payload: string | Array<string>
}

export const MainContextProvider = ({ children }: {children: JSX.Element | JSX.Element[]}) => {

    const [state, dispatch] = useReducer((state: Array<string>, action: ReducerAction): Array<string> => {
        if (action.type === 'append') {
            if (Array.isArray(action.payload)) {
                return [
                    ...state,
                    ...action.payload
                ]
            }
            return [
                ...state,
                action.payload
            ]
            
        }
        if (action.type === 'remove') {
            if (Array.isArray(action.payload)) {
                return [
                    ...state.filter(d => action.payload.includes(d))
                ]
            }
            return [
                ...state.filter(d => d != action.payload)
            ]
        }
    }, []);

    return <MainContext.Provider value={{
        items: state,
        dispatch
    }}>
        {children}
    </MainContext.Provider>
}

export function useMainContext() {
    return useContext(MainContext);
}