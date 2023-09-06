import { useState } from "react";

export function useFetch() {
    const [data, setData] = useState(null);

    const fetchApi = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setData(json);
        });
    };

    return { fetchApi, data }
}