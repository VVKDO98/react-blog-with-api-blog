import React from 'react';
import FeaturedThisMonth from './FeaturedThisMonth';

const Header = ({data}) => {
    return (
        <div className='w-full bg-lightgreen'>
            <FeaturedThisMonth data={data}/>
        </div>
    );
};

export default Header;