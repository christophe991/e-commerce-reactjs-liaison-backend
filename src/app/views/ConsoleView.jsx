
import { getConsole } from "../api/backend/apiConsole";
import React, { useEffect, useState } from "react"
const ConsoleView = () => {
    const [useConsole, setConsole] = useState([]);

    useEffect(() => {
        getConsole().then(resp => {
            setConsole(resp.data)
            console.log(useConsole)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return (
        <div>
            {useConsole.map(e => (
                <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h3 key={e._id} className ="bg-blue-700 text-white font-bold text-xl mb-2">Console : {e.brand}</h3>
                <img className="w-full" src="src/app/assets/images/ps4.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    
                    <p key={e._id} className="text-gray-700 text-base">
                        Type : {e.type}
                    </p>
                    <p key={e._id} className="text-gray-700 text-base">
                        modele : {e.model}
                    </p>
                    <p  className="text-gray-700 text-base">
                        Description : {e.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span key={e._id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ref : {e.reference}</span>
                    <span key={e._id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Prix : {e.price}€</span>
                    <button className="inline-block btn btn-green rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ajouter au panier</button>
                    
                </div>
            </div>

                </div>

            ))}
        </div>
    )
}
export default ConsoleView