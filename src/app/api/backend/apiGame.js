import apiBackEnd from "./api.Backend";

export function getGame(){
    return apiBackEnd.get("/game")
}

export function postGame(data){
    return apiBackEnd.post("/game", data)
}