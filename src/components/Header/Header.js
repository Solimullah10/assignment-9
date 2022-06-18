import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=' w-full mx-auto  bg-indigo-400 md:ml'>
            <div onClick={() => setOpen(!open)} className='mx-auto w-8 h-8  md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}

            </div>
            <div className='w-full mx-auto'>
                <nav className={`md:flex w-full md:w-11/12 md:bg-indigo-400 bg-indigo-300 mx-auto md:py-5 absolute md:static duration-500 easy-in ${open ? 'top-8' : 'top-[-150px]'}`}>
                    <CustomLink className="md:mr-10 text-xl uppercase" to='/'>Home</CustomLink>
                    <CustomLink className="md:mr-10 text-xl uppercase" to='/Dashboard'>Dashboard</CustomLink>
                    <CustomLink className="md:mr-10 text-xl uppercase" to='/Reviews'>Reviews</CustomLink>
                    <CustomLink className="md:mr-10 text-xl uppercase" to='/Blogs'>Blogs</CustomLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;