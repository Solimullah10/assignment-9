import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className=' bg-green-300 w-full mx-auto mb-5'>
            <nav className='flex w-10/12 mx-auto py-5 '>
                <CustomLink className="mr-10 text-xl" to='/'>Home</CustomLink>
                <CustomLink className="mr-10 text-xl" to='/Dashboard'>Dashboard</CustomLink>
                <CustomLink className="mr-10 text-xl" to='/Reviews'>Reviews</CustomLink>
                <CustomLink className="text-xl" to='/About'> About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;