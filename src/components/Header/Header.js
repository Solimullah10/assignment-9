import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className='py-5 bg-green-300'>
            <nav className='flex md:ml-96'>
                <CustomLink className="mr-5 md:ml-11 text-xl" to='/'>Home</CustomLink>
                <CustomLink className="mr-5 text-xl" to='/Dashboard'>Dashboard</CustomLink>
                <CustomLink className="mr-5 text-xl" to='/Reviews'>Reviews</CustomLink>
                <CustomLink className="mr-5 text-xl" to='/About'> About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;