import React, { useState } from 'react'
import { Toggle } from '../ToggleDark/Toggle';
import { AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'gatsby';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="flex justify-between items-center relative container mx-auto py-3">
            <div className="flex items-center">
                <div className="header-logo">
                    <Link to='/' className="text-2xl font-bold">@kevinllo</Link>
                </div>
            </div>

            <nav className="hidden sm:block">
                <ul className="flex space-x-4 items-center">
                    <li className='font-semibold'> <Link to="/about" activeClassName='active-link'>About</Link></li>
                    <li className='font-semibold'>  <Link to="/projects" activeClassName='active-link'>Projects</Link></li>
                    <li className='font-semibold'><Link to="/contact" activeClassName='active-link'>Contact</Link></li>
                    <li className='font-semibold'> <Toggle /></li>
                </ul>
            </nav>

            <div className="sm:hidden z-20" onClick={() => setIsMenuOpen(!isMenuOpen)} >
                {!isMenuOpen
                    ? <AiOutlineAlignRight fontSize='30px'
                        className={`cursor-pointer ${isMenuOpen ? 'text-white' : 'light:text-black'}`} />
                    : <AiOutlineClose fontSize='30px'
                        className={`cursor-pointer ${isMenuOpen && 'text-white'}`} />}
            </div>

            <div className={isMenuOpen
                ? 'mobile-menu sm:hidden absolute inset-0 text-slate-100 dark:text-accent bg-gray-900 opacity-90 z-10 min-h-screen flex justify-center items-center'
                : 'mobile-menu hidden sm:hidden'}>
                <nav className="mt-4">
                    <ul className="grid gap-4">
                        <li className='text-2xl'> <Link to="/about" activeClassName='active-link'>About</Link></li>
                        <li className='text-2xl'>  <Link to="/projects" activeClassName='active-link'>Projects</Link></li>
                        <li className='text-2xl'><Link to="/contact" activeClassName='active-link'>Contact</Link></li>
                        <li className='text-2xl'> <Toggle /></li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default Header;