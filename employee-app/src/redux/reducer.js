import * as types from "./actionTypes";

const initialState = {
    employeeData:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initialState,action)=>{
    const {payload,type} = action;
    switch(type){
        case types.ADD_EMPLOYEE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case types.ADD_EMPLOYEE_DATA_SUCCESS:
            return {
                ...state,
                employeeData:payload,
                isLoading:false,
                isError:false
            }
        case types.ADD_EMPLOYEE_DATA_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        case types.GET_EMPLOYEE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }            
        case types.GET_EMPLOYEE_DATA_SUCCESS:
            return {
                ...state,
                employeeData:payload,
                isLoading:false,
                isError:false
            }   
        case types.GET_EMPLOYEE_DATA_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        case types.EDIT_EMPLOYEE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case types.EDIT_EMPLOYEE_DATA_SUCCESS:
            return {
                ...state,
                employeeData:payload,
                isLoading:false,
                isError:false
            }
        case types.EDIT_EMPLOYEE_DATA_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true
            }           
        default:
            return state;
    }
}