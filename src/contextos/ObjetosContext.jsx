import { useContext } from "react";
import { Children, createContext, useState } from "react";

// const [objetos, setObjetos] = useState([])
// const [show, setShow] = useState(false);  --> Vão ser passados para dentro do ObjetoContextProvider
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

export const ObjetoContext = createContext ({});

export function ObjetoContextProvider({ Children }){
    const [objetos, setObjetos] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);



    return(
        <ObjetoContext.Provider value={{
            objetos,
            setObjetos,
            show,
            setShow,
            handleClose,


        }}
        >
            {Children}
        </ObjetoContext.Provider>

    )
};

export function useObjeto (){
    return useContext (ObjetoContext);
}
