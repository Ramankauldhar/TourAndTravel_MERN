import { useState, useEffect } from 'react';

const FetchData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDataFromAPI = async() => {
            setLoading(true);
            try{
                const response = await fetch(url);
                if(!response.ok){
                    setError("Error while fetching the data.");
                }
                const result = await response.json();
                setData(result.data);
                setLoading(false);
            }
            catch(error){
                setError(error.message);
                setLoading(false);
            }
        };
        fetchDataFromAPI();
    }, [url]);
    return{
        data, error, loading
    }
}

export default FetchData;