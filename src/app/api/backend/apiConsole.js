import apiBackEnd from './api.Backend'

export function getConsole(){
    return apiBackEnd.get("/console")

}
export function postConsole(data){
    return apiBackEnd.post("/console", data)

}
