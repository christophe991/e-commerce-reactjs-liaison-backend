import React, {PureComponent} from "react"
import "../assets/styles/product.css"
import {Link} from 'react-router-dom'



import {postConsole} from '../api/backend/apiConsole';





class CommercialHomeView extends PureComponent {
   constructor(props){
       super(props) 
       this.state ={
           brand: "",
           type: "",
           model: "",
           description: "",
           price: "",
           reference: "",
           picture: "",
       }

   }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.postConsole()
       /*  const formData = new FormData()
        formData.append('brand',  this.state.brand)
        formData.append('type', this.state.type)
        formData.append('model', this.state.model)
        formData.append('description', this.state.description)
        formData.append('price', this.state.price)
        formData.append('reference', this.state.reference)
        formData.append('picture', this.state.picture)
        postConsole(formData).then(res =>{
            this.setState({
                console: res.data
            })
            console.log(this.state)
        }) */
    
    }

    postConsole(){
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        const url = "http://localhost:8080/api/console"
        fetch(url, config)
        .then(res => res.json())
        .then(res =>{
            if(res.error){
                alert(res.error)
            }else{
                alert(`Le produit ${this.state.brand} a été ajouté !!`)
            }
            
        }) .catch(e => {
            console.error(e)
            alert(`Erreur lors de l'ajout du produit !!`)
        })
    }
    render(){
    const {brand, type, model, description, price, reference, picture } = this.state;
    
        return (
            <div>
                <ul className="text-center mb-5 flex justify-around flex-row">
                    <Link to="/game">Ajouter un jeu</Link>
                    <Link to="/accessory">Ajouter un accessoire</Link>
                </ul>
                <div className='block p-6 rounded-lg shadow-lg bg-white' id='background'>
                    <h1 className=' color-white text-center mt-6  text-3xl font-extrabold text-gray-800'>Ajouter une console</h1>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">

                                <label htmlFor="picture">Image du produit:</label>


                                <input className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="picture"
                                    name="picture" onChange={this.handleChange} value={picture} />

                            </div>


                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">

                                <label htmlFor="brand">Marque:</label>
                                <input type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="brand" name='brand'
                            onChange={this.handleChange} value={brand} />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="type">Type:</label>
                                <input onChange={this.handleChange} value={type}  type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="type" name='type' />
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">

                                <label htmlFor="model">Modele:</label>
                                <input onChange={this.handleChange} value={model} type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="model" name='model' />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="description">Description:</label>
                                <textarea onChange={this.handleChange} value={description} htmlFor="description" type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description" name='description' />
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">

                                <label htmlFor="price">Prix:</label>
                                <input onChange={this.handleChange} value={price} htmlFor="price" type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price" name='price' />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="reference">Reference:</label>
                                <input onChange={this.handleChange} value={reference} htmlFor="reference" type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="reference" name='reference' />
                            </div>

                        </div>
                        <button id="marge-button" type="submit" className="btn-form">Ajouter</button>
                    </form>
                </div>
            </div>
        )

    
     }       

}


export default  CommercialHomeView;