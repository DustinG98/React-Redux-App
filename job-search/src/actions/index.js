import axios from 'axios'

export const FETCH_JOB_START = "FETCH_JOB_START"
export const FETCH_JOB_SUCCESS = "FETCH_JOB_SUCCESS"
export const FETCH_JOB_FAIL = "FETCH_JOB_FAIL"

export const getJobs = () => dispatch => {
    dispatch({type: FETCH_JOB_START});
    axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=1')
        .then(res => {
            dispatch({type: FETCH_JOB_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_JOB_FAIL, payload: err})
        })
}