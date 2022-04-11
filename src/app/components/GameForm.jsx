import React, { PureComponent } from "react"
import "../assets/styles/product.css"
import {postGame} from '../api/backend/apiGame'
import { connect } from "react-redux"


class GameForm extends PureComponent {
    state ={
        title: "",
        gender: "",
        date: "", 
        price: "",
        reference: "",
        picture: ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('gender', this.state.gender)
        formData.append('date', this.state.date)
        formData.append('price', this.state.price)
        formData.append('reference', this.state.reference)
        formData.append('picture', this.state.picture)
        postGame(formData).then(res =>{
            this.setState({
                game: res.data
            })
            console.log(this.state)
        })
    }
    render() {
        const {title, gender, date, price, reference, picture } = this.state;
        return (
            <div>
                <div className='block p-6 rounded-lg shadow-lg bg-white' id='background'>
                    <h1 className=' color-white text-center mt-6  text-3xl font-extrabold text-gray-800'>Ajouter une jeu</h1>
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

                                <label htmlFor="title">Titre:</label>
                                <input type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="title" name='title'
                                    onChange={this.handleChange} value={title} />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="gender">Genre:</label>
                                <input onChange={this.handleChange} value={gender} type="text" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gender" name='gender' />
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">

                                <label htmlFor="date">Date de sortie:</label>
                                <input type="date" className="form-control block w-80 px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="date" name='date'
                                    onChange={this.handleChange} value={date} />
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
const mapStateToProps = (state) =>{
    return {
        
        Title: state.game.games,
        gender: state.game.games,
        date: state.game.games,
        price: state.game.games,
        reference: state.game.games,
        picture: state.game.games
    }
}

const mapActionToProps = (dispath) =>{
    return{
        getgame: () =>dispath(getInfosApi())
    }
}

export default connect(mapStateToProps, mapActionToProps) (GameForm);