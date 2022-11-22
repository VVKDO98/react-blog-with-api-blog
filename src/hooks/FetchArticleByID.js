import { useState, useEffect } from 'react';
import {supabase} from "../supabaseClient"

const FetchArticleByID = (id) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchArticleByID = async () => {
            setLoading(true);

            const { data, error } = await supabase
                .from('Posts')
                .select('*, Categories(*), Users(*)')
                .eq('id', id)
            
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

        fetchArticleByID();
    }, [id]);

    return {loading, error, data};
};

export default FetchArticleByID;