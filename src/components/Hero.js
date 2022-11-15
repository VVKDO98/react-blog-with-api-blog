import React from 'react';
import FeaturedThisMonth from './FeaturedThisMonth';
import PopularPosted from './PopularPosted';

const Header = ({posts}) => {
    return (
        <div className='w-full h-full bg-bannercolor py-10'>
            <div className='w-11/12 m-auto lg:w-4/5 lg:flex lg:gap-8'>
                <FeaturedThisMonth posts={posts}/>
                <PopularPosted posts={posts}/>
            </div>
        </div>
    );
};

export default Header;