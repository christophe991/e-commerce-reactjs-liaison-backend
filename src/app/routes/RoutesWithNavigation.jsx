import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';




import IdleTimerCustom from './../components/account/IdleTimerCustom';
import Header from './../components/layouts/Header';
import Nav from './../components/layouts/Nav';
import Footer from './../components/layouts/Footer';
import { selectIsLogged } from './../shared/redux-store/authenticationSlice';
import Routes from './Routes';
import { URL_LOGIN } from '../shared/constants/urls/urlConstants';
import CommercialHomeView from '../views/CommercialHomeView';



const contextClass = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-500',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
};

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const RoutesWithNavigation = () => {
    const isLogged = useSelector(selectIsLogged);

    return (
        <BrowserRouter>
            <div className="h-full flex flex-col bg-gray-100 cursor-default">
                {isLogged && <IdleTimerCustom />}
                <Header />
                <Nav />
                
                

                
                
                
                <main className="h-full mt-24">
                    
                    <Routes/>
                   
                    
                    
                    
                </main>
               <Footer />
                <ToastContainer
                    toastClassName={({ type }) =>
                        contextClass[type || 'default'] +
                        ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
                    }
                    bodyClassName={() => 'text-sm font-white font-med block p-3'}
                    position="bottom-left"
                    autoClose={3000}
                />
            </div>
        </BrowserRouter>
    );
};

export default RoutesWithNavigation;
