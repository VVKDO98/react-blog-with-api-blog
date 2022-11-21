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
        <div>
            <h1>Search result for {data[0].name}</h1>
            <hr />
            <div>
                {data[0].Posts.map((post) => <CategorySearchResult key={post.id} data={post}/>)}
            </div>
        </div>
    );
};

export default Category;