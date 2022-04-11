import { LockClosedIcon } from '@heroicons/react/solid';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../shared/components/form-and-error-components/Input';
import { signIn } from '../../shared/redux-store/authenticationSlice';
import { isAuthenticated } from '../../shared/services/accountServices';
import { authenticate } from './../../api/backend/account';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { Checkbox } from './../../shared/components/form-and-error-components/InputChoices';
import { defaulValuesLogin } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormLogin } from './../../shared/constants/formik-yup/yup/yupUser';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

/**
 * Component Form Login
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet
 */
const FormLogin = ({ submit, errorLog }) => (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id='marge-form'>
        <form>
            <div className="form-group mb-6">
                <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Adresse email</label>
                <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                    aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="form-group mb-6">
                <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Mot de passe</label>
                <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-outm-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    placeholder="****" />
            </div>
            <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                    <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2" />
                    <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Ce souvenir de moi</label>
                </div>
                <a href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Mot de passe oublier</a>

            </div>


            <button type="submit" id="btn-form">Envoyer</button>

        </form>
    </div>
);

/**
 * Component Login
 *
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 *
 * See above for information
 *
 * @author Peter Mollet
 */
const Login = () => {
    const [errorLog, setErrorLog] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = (values) => {
        authenticate(values)
            .then((res) => {
                if (res.status === 200 && res.data.id_token) {
                    dispatch(signIn(res.data.id_token));
                    if (isAuthenticated()) history.push(URL_HOME);
                }
            })
            .catch(() => setErrorLog(true));
    };
    return (

        <div >
            <div>
                <div className="flex justify-center mt-5">
                    <img
                        className="h-12 w-auto sm:h-10 cursor-pointer"
                        src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png"
                        alt=""
                        width={200}
                        height={60}
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Connexion utilisateur
                </h2>
            </div>

            <hr />
            <FormLogin errorLog={errorLog} submit={handleLogin} />
        </div>
    );
};

export default Login;
