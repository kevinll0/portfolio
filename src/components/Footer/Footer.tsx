import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm font-semibold">Copyright © 2023
                        <a href="#" className="text-gray-400 hover:text-white ml-1">Kevin Grande</a>
                    </p>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://www.linkedin.com/in/kevin-grande-7b9b7221b/">
                                <AiFillLinkedin
                                    fontSize='25px'
                                    className='cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/kevinllo">
                                <AiFillGithub
                                    fontSize='25px'
                                    className='cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://gitlab.com/kevinllo">
                                <AiFillGitlab
                                    fontSize='25px'
                                    className='cursor-pointer' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-1 text-sm text-center sm:text-start">
                    <p className="text-accent">Designed and developed by Kevin Grande 🐱‍👤</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;