import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=' w-full mx-auto mb-5 bg-indigo-600 '>
            <div onClick={() => setOpen(!open)} className='w-11/12 mx-auto w-8 h-8  md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}

            </div>
            <nav className={`md:flex mx-auto md:py-5 absolute md:static duration-500 easy-in w-full bg-indigo-600   ${open ? 'top-8' : 'top-[-150px]'}`}>
                <CustomLink className="md:mr-10 text-xl" to='/'>Home</CustomLink>
                <CustomLink className="md:mr-10 text-xl" to='/Dashboard'>Dashboard</CustomLink>
                <CustomLink className="md:mr-10 text-xl" to='/Reviews'>Reviews</CustomLink>
                <CustomLink className="md:mr-10 text-xl" to='/Blogs'>Blogs</CustomLink>
                <CustomLink className="md:mr-10 text-xl" to='/About'> About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;