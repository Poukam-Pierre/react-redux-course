import { ACCESS_DENIED, API_END, API_ERROR, API_START } from "./userType";

// General actions for fetching
export const apiStart = label => ({
    type: API_START,
    payload: label
});

export const apiEnd = label => ({
    type: API_END,
    payload: label
});

export const accessDenied = url => ({
    type: ACCESS_DENIED,
    payload: {
        url
    }
});

export const apiError = error => ({
    type: API_ERROR,
    error
});