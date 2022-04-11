import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';
import { ROLE_ADMIN, ROLE_COMMERCIAL } from '../shared/constants/rolesConstant';
import {
    URL_ADMIN_HOME,
    URL_HOME,
    URL_LOGIN,
    URL_REGISTER,
    URL_COMMERCIAL_HOME,
    URL_GAME_FORM,
    URL_ACCESSORY_FORM,
    URL_CONSOLE
} from '../shared/constants/urls/urlConstants';
import { customHistory } from '../shared/services/historyServices';
import AdminHomeView from '../views/AdminHomeView';
import HomeView from '../views/HomeView';
import Login from '../components/account/Login';
import LoginView from '../views/LoginView';
import Register from '../components/account/Register';
import ConsoleView from '../views/ConsoleView';
import CommercialHomeView from '../views/CommercialHomeView';
import GameForm from '../components/GameForm';
import AccessoryForm from '../components/AccessoryForm';


/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
             
            <Route exact path={URL_LOGIN} component={Login}/>
            <Route exact path={URL_REGISTER} component={Register} />
            <Route exact path={URL_GAME_FORM} component={GameForm} />
            <Route exact path={URL_ACCESSORY_FORM} component={AccessoryForm} />
            <Route exact path={URL_CONSOLE} component={ConsoleView} />
            
            
            
            <Route exact path={URL_COMMERCIAL_HOME}
           
                component={CommercialHomeView}
                roles={[ROLE_COMMERCIAL]}   />
            <PrivateRoute
                path={URL_ADMIN_HOME}
                component={AdminHomeView}
                roles={[ROLE_ADMIN]}
                
                
            />
            
            
            <Route path={URL_HOME} component={HomeView} />
            
        </Switch>
        
    );
};

export default Routes;
