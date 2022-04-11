import apiBackEnd from './api.Backend'
import { URL_BACK_NEW_PRODUCT, URL_BACK_GET_PRODUCT} from '../../shared/constants/urls/urlBackEnd'

export function addProduct(){
    return apiBackEnd.post(URL_BACK_NEW_PRODUCT, values)
}

export function getProduct(){
    return apiBackEnd.get(URL_BACK_GET_PRODUCT)
}