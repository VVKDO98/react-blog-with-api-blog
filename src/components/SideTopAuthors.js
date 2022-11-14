import React from 'react';
import useFetch from "../hooks/useFetch";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const SideTopAuthors = () => {
    const url_base = "http://localhost:3030/";
    const { loading, error, data } = useFetch(url_base + "users");

    if (loading) return <p>Loading Top Authors</p>;
    if (error) return <p>Unable to Top Authors</p>;

    console.log(data);

    return (
        <div>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Top</span> Authors</h3>
            {data.map((data, index) => {
                return  <div key={index}>
                            <img src="/" alt=""/>
                            <div>
                                <p>{data.username}</p>
                                <p>{data.title}</p>
                                <div>
                                    <a href="/"><FaFacebookF/></a>
                                    <a href="/"><FaTwitter/></a>
                                    <a href="/"><FaInstagram/></a>
                                </div>
                            </div>
                        </div>
            })}
        </div>
    );
};

export default SideTopAuthors;