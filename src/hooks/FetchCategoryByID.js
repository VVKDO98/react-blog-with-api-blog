import { useState, useEffect } from 'react';
import {supabase} from "../supabaseClient"

const FetchCategories = (id) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchCategories = async () => {
            setLoading(true);

            const { data, error } = await supabase
                .from('Categories')
                .select('*, Posts(*)')
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

        fetchCategories();
    }, []);

    return {loading, error, data};
};

export default FetchCategories;