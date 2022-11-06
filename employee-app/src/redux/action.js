import * as types from "./actionTypes";
import axios from "axios";

export const addEmployeeData = (payload)=>(dispatch)=>{
    dispatch({type:types.ADD_EMPLOYEE_DATA_REQUEST})
    return axios.post("https://json-server-mocker-app.herokuapp.com/employee_data",payload)
    .then((r)=>{
        return dispatch({
            type:types.ADD_EMPLOYEE_DATA_SUCCESS,
            payload:r.data
        })
    })
    .catch((err)=>dispatch({type:types.ADD_EMPLOYEE_DATA_ERROR}))    
}

export const getEmployeeData = ()=>(dispatch)=>{
    dispatch({type:types.GET_EMPLOYEE_DATA_REQUEST})
    return axios.get("https://json-server-mocker-app.herokuapp.com/employee_data")
    .then((r)=>{
        return dispatch({
            type:types.GET_EMPLOYEE_DATA_SUCCESS,
            payload:r.data
        })
    })
    .catch((err)=>{
        return dispatch({type:types.GET_EMPLOYEE_DATA_ERROR})
    })
}

export const editEmployeeData = (id,payload)=>(dispatch)=>{
    dispatch({type:types.EDIT_EMPLOYEE_DATA_REQUEST})
    return axios.patch(`https://json-server-mocker-app.herokuapp.com/employee_data/${id}`,payload)
    .then((r)=>{
        return dispatch({
            type:types.EDIT_EMPLOYEE_DATA_SUCCESS,
            payload:r.data
        })
    })
    .catch((err)=>dispatch({type:types.EDIT_EMPLOYEE_DATA_ERROR}))
}