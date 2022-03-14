import React, { Component } from 'react';


class Register extends Component {

    render() {
        return (
            <div>
                <h1 className='text-center'>Création de compte</h1>
                <form className='mt-10'>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                             placeholder="Nom"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                             placeholder="Prénom"/>
                        </div>
          
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                             placeholder="Adresse email"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                             placeholder="Confirmer adresse email"/>
                        </div>
          
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                             placeholder="Mot de passe"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                             placeholder="Confirmer mot de passe"/>
                        </div>
          
                    </div>
                    
                    
                    <hr className='mt-5' />
                    <h4 className='mt-10'>Adresse de livraison</h4>
                    
                    <div  className="form-group mb-6 mt-6">
                        <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126" placeholder="Rue"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                             placeholder="N° rue"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                             placeholder="appartement"/>
                        </div>
          
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                             placeholder="Ville"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                             placeholder="Code postal"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-paddingborder border-solid border-gray-300 rounded transitionease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                             placeholder="Pays"/>
                        </div>
          
                    </div>

                    
                   
                    
                   
                    <button type="submit" className="w-full px-6 py-2.5 bg-blue-600text-white font-medium
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                    transition duration-150 ease-in-out">Valider</button>
                </form>
            </div>
        
        );
    }
}


export default Register;
        
        
        
        
        
        
        
        
        
        
                            








            