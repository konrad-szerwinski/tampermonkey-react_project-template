import { useCallback } from "react";
import { MainContext, useMainContext } from "./context/MainContext";
import Item from './Item';

const App = () => {

    const {items: mainContextItems, dispatch: mainContextDispatcher} = useMainContext();

    const itemOnClickHandler = useCallback((title: string) => {
        mainContextDispatcher({type: 'remove', payload: title})
    }, []);

    return ( 
        <>
            <div>Hello World!</div>
            <button onClick={() => mainContextDispatcher({type: "append", payload: `hello_${mainContextItems.length}`})}>Add</button>
            { mainContextItems.map((text) => 
                <Item onClick={itemOnClickHandler} title={text} />
            ) }
        </>

    );
};

export default App;