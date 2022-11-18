import { useParams } from 'react-router-dom';
import FetchCategoryByID from '../hooks/FetchCategoryByID'

const Category = () => {
    // Ne refresh pas au changement de page
    const {id} = useParams();
    const {loading, error, data} = FetchCategoryByID({id}.id);

    if (error) return <p>Loading of articles</p>;
    if (loading) return <div className="w-full h-screen flex items-center justify-center"><img src="./assets/img/spinner.svg" alt="" /></div>;

    // console.log(data[0].Posts);
    return (
        <div>
            <h1>Category {id}</h1>
            {data[0].Posts.map(post => <h1>{post.title}</h1>)}
        </div>
    );
};

export default Category;