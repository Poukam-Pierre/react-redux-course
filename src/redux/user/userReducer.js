import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, API_START } from "./userType"

const initialState = {
    loading: false,
    data: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    console.log("action type => ", action.type);
    switch (action.type) {
        case API_START:
            if (action.payload === FETCH_USERS_REQUEST) {
                return {
                    ...state,
                    loading: true
                }
            }
            break;
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;