import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getJobs } from '../actions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const FetchJobsList = () => {
    //define dispatch
    const dispatch = useDispatch()

    //search term state
    const [searchTerm, setSearchTerm] = useState("")

    //fetch jobs function, dispatchs the searchTerm to fetch that list of jobs
    const fetchJobs = e => {
        e.preventDefault()
        dispatch(getJobs(searchTerm));
        setSearchTerm("")
    }

    //fetch initial jobs
    useEffect(() => {
        dispatch(getJobs(""));
    }, [dispatch])

    //set the search term when the input value changes
    const handleSearchTermChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="fetchForm">
            <TextField placeholder="Any search term here..." variant="outlined" type="text" value={searchTerm} onChange={e => handleSearchTermChange(e)}/>
            <Button variant="contained" color="primary" onClick={e => fetchJobs(e)}>Search Jobs</Button>
        </div>
    )
}

// const mapStateToProps = state => ({
//     jobs: state.jobs,
//     isFetching: state.isFetching,
//     error: state.error
// })

// export default connect(mapStateToProps, { getJobs })(FetchJobsList)

export default FetchJobsList;