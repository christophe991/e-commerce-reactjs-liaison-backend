import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    URL_HOME,
    URL_LOGIN,
    URL_REGISTER,
} from './../../shared/constants/urls/urlConstants';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice';

const Header = () => {
    return (
        <Disclosure as="nav" >
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto bg-red-600  px-4 sm:px-6">
                        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                            <div className='flex justify-between items-center  md:space-x-10 '>
                                <Link to={URL_HOME}>
                                   <img src="../src/app/assets/images/gaming1.png"/>
                                </Link>
                                <h1 className='text-white'>Bienvenue sur le site</h1>
                            </div>

                            <div className="hidden md:flex items-center justify-end flex-1 lg:w-0">
                                <ConnectionBtn />
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary 
                                    focus:outline-none transform active:scale-95 active:ring-2 active:ring-offset-2 active:ring-primary "
                                >
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        enter="transition"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Disclosure.Panel className="p-4 md:hidden ">
                            <hr />
                            <div className="p-4">
                                <ConnectionBtn />
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Header;

const ConnectionBtn = () => {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    if (isLogged)
        return (
            <button className="ml-8 btn btn-green" onClick={() => dispatch(signOut())}>
                Sign out
            </button>
        );
    else
        return (
            <div className="flex justify-center md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link to={URL_LOGIN}>
                <button className="btn ">Connexion</button>
                
                </Link>
                <Link to={URL_REGISTER}>
                    <button className="btn ">Inscription</button>
                </Link>
            </div>
        );
};
