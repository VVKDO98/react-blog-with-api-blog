import React from 'react';
import FeaturedThisMonth from './FeaturedThisMonth';

const Header = ({data}) => {
    return (
        <div className='w-full h-full bg-bannercolor py-10'>
            <FeaturedThisMonth data={data}/>
        </div>
    );
};

export default Header;