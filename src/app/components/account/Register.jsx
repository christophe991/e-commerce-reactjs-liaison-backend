
import React, { Component } from 'react';


class Register extends  Component{
    

    
    render(){
    return (
        <div className='block p-6 rounded-lg shadow-lg bg-white' id='background'>
            <h1 className=' color-white text-center mt-6  text-3xl font-extrabold text-gray-800'>Création de compte</h1>
            <form action="/" onSubmit={(e) => signup(e)} className='mt-10' id='form' method='POST'>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} htmlfor="name" type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" name='name'
                            placeholder="Nom" />
                    </div>
                    <div className="form-group mb-6">
                    <input onChange={(e) => handle(e)} htmlfor="name" type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="prenom" name='prenom'
                            placeholder="prenom" />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="text" htmlfor='email' className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" name='email'
                            placeholder="Adresse email" />
                    </div>
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="text" htmlfor='confirmemail' className="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="confirmemail" name='confirmemail'
                            placeholder="Confirmer adresse email" />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="password" htmlfor='password' className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" name='password'
                            placeholder="Mot de passe" />
                    </div>
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="password" htmlfor='confirmpassword' className="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="confirmpassword" name='confirmpassword'
                            placeholder="Confirmer mot de passe" />
                    </div>

                </div>

                <h4 className='mt-6'>Adresse de livraison</h4>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="text" htmlfor='street' className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="street" name='street'
                            placeholder="Nom de la rue" />
                    </div>
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="number" htmlfor='number' className="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="number" name='number'
                            placeholder="N° de rue" />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4">
                    {/* <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="text" htmlfor='apartment' className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="apartment" name='apartment'
                            placeholder="Appartement" />
                    </div> */}
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="text" htmlfor='city' className="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="city" name='city'
                            placeholder="Ville" />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="text" htmlfor='postalcode' className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="postalcode" name='postalcode'
                            placeholder="Code postal" />
                    </div>
                    <div className="form-group mb-6">
                        <input onChange={(e) => handle(e)} type="text" htmlfor='country' className="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="country" name='country'
                            placeholder="Pays" />
                    </div>

                </div>
                <button type="submit" className="btn-form">S'inscrire</button>
            </form>
        </div>

        );
    }
}



export default Register;



















