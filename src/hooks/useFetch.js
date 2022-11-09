import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);

            try {
                fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    setLoading(false);
                })
                
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData()
    }, [url])

    return {loading, error, data};
};

export default useFetch;