import { FETCH_JOB_START, FETCH_JOB_SUCCESS, FETCH_JOB_FAIL } from '../actions'

const initialState = {
    jobs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOB_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_JOB_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                isFetching: false,
                error: ""
            }
        case FETCH_JOB_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}