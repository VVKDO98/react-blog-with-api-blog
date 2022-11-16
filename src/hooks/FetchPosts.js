import { useState, useEffect } from 'react';
import {supabase} from "../supabaseClient"

const FetchPosts = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchPosts = async () => {
            setLoading(true);

            const { data, error } = await supabase
                .from('Posts')
                .select('*, Categories(*), Users(*)')
            
            if(error){
                setData(null);
                setError(error);
                setLoading(true)
            };

            if(data){
                setData(data);
                setError(null);
                setLoading(false)
            };
        };

        fetchPosts();
    }, []);

    return {loading, error, data};
};

export default FetchPosts;