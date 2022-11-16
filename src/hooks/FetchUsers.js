import { useState, useEffect } from 'react';
import {supabase} from "../supabaseClient"

const FetchUsers = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchUsers = async () => {
            setLoading(true);

            const { data, error } = await supabase
                .from('Users')
                .select('*')
            
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

        fetchUsers();
    }, []);

    return {loading, error, data};
};

export default FetchUsers;