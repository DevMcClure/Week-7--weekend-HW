import React, {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setError(error))
      
    }

    useEffect(() => {
        handleFetch();

      
    }, [url]);

    return {data, error};

  
}