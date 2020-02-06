import { FETCH_JOB_START, FETCH_JOB_SUCCESS, FETCH_JOB_FAIL } from '../actions'

//INITIAL STATE, NO JOBS, FETCHING IS FALSE, AND NO ERROR
const initialState = {
    jobs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        //START THE JOB FETCH
        case FETCH_JOB_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        //WHEN THE JOB FETCH SUCCESSFULLY RUNS
        case FETCH_JOB_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                isFetching: false,
                error: ""
            }
        //IF THE JOB FETCH FAILS
        case FETCH_JOB_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}