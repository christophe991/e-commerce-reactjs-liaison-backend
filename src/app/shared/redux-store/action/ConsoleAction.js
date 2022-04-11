

export const ADD_REQUEST_INFO_ACTION = 'ADD_REQUEST_INFO_ACTION';
export const UPDATE_REQUEST_INFO_ACTION = 'UPDATE_REQUEST_INFO_ACTION';
export const IS_LOADING = 'IS_LOADING';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_DATA';
export const END_FETCHING_DATA = 'END_FETCHING_DATA';


export const getConsoleApi = () =>{
    return(dispatch) =>{
        getConsole().then(res =>{
            dispatch({
                type: ADD_REQUEST_INFO_ACTION,
                infos: res.data
            })
        })
        .catch(error =>{
            dispatch({
                type: ERROR_FETCHING_DATA,
                error: error
            })
        })
    }
}

export const postConsoleApi = (consObj) => {
    return (dispatch) => {
        postConsole(consObj).then(res =>{
            console.log(res);
            dispatch({
                type: ADD_REQUEST_INFO_ACTION,
                playload: res.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}