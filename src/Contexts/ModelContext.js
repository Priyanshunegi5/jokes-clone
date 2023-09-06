import React, { 
    useState, createContext, useEffect
} from "react";

import { useFetch } from './../Hooks/useFetch';

export const ModelContext = createContext({
    loadResult: () => {},
    result: null, setResult: () => {},
    status: false, setStatus: () => {},
    category: null, setCategory: () => {}
});

export default function ModelContextProvider({children}){
    const {fetchApi, data} = useFetch();
    const [result, setResult] = useState(false);
    const [status, setStatus] = useState(false);
    const [category, setCategory] = useState(null);

    const loadResult = () => {
        fetchApi(`https://api.chucknorris.io/jokes/random?category=${category}`);
    };

    useEffect(() => {
        setResult(data);
    },[data])

    useEffect(() => {
        if(category === null){
            return;
        }

        loadResult();
    },[category]);

    return (
        <ModelContext.Provider value={{
            loadResult: loadResult,
            result: result, setResult: setResult,
            status: status, setStatus: setStatus,
            category: category, setCategory: setCategory
        }}>
            {children}
        </ModelContext.Provider>
    );
}