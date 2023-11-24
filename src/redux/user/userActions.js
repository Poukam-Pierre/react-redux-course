
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"
import apiAction from "./utils"

// 
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}



export const fetchUsers = () => {
    return apiAction({
        url: "https://jsonplaceholdeer.typicode.com/users",
        method: "GET",
        onSuccess: (users) => {
            return fetchUsersSuccess(users)
        },
        onFailure: (error) => {
            return fetchUsersFailure(error)
        },
        label: FETCH_USERS_REQUEST
    })
}