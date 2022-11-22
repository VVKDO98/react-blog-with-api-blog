import { useParams } from 'react-router-dom';
import FetchCategoryByID from '../hooks/FetchCategoryByID'
import CategorySearchResult from './CategorySearchResult';

const Category = () => {
    const {id} = useParams();
    const {loading, error, data} = FetchCategoryByID({id}.id);

    if (error) return <p>Loading of articles</p>;
    if (loading) return <div className="w-full h-screen flex items-center justify-center"><img src="./assets/img/spinner.svg" alt="" /></div>;

    console.log(data[0].Posts);
    return (
        <>
            <div className='w-11/12 m-auto mt-10 lg:w-4/5'>
                <h1 className='text-lg text-grey'>Search result for <span className='text-black font-semibold'>{data[0].name}</span></h1>
                <hr className='border border-1 border-bgcolor'/>
                {data[0].Posts.map((post) => <CategorySearchResult key={post.id} data={post}/>)}
            </div>
        </>
    );
};

export default Category;