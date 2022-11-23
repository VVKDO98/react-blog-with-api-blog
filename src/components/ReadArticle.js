import React from 'react';
import Sidebar from './Sidebar'
import ArticleContent from './ArticleContent';
import { useParams } from 'react-router-dom';
import FetchArticleByID from '../hooks/FetchArticleByID'
import Layout from './Layout';

const ReadArticle = () => {
    const {id} = useParams();
    const {loading, error, data} = FetchArticleByID({id}.id);

    if (error) return <p>Loading of articles</p>;
    if (loading) return <div className="w-full h-screen flex items-center justify-center"><img src="./assets/img/spinner.svg" alt="" /></div>;
    
    console.log(data);

    return (
        <>
        <Layout>
            <div className='m-auto my-10 w-4/5 lg:flex lg:flex-row lg:justify-between lg:gap-40'>
                <ArticleContent data={data}/>
                <Sidebar/>
            </div>   
        </Layout>
        </>
    );
};

export default ReadArticle;