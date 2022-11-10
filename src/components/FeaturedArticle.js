import React from 'react';

const FeaturedArticle = ({data}) => {
    return (
        <div>
            <p>{data.categories.name}</p>
        </div>
    );
};

export default FeaturedArticle;