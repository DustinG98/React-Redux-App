import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getJobs } from '../actions'

const FetchJobsList = props => {
    const { getJobs } = props;
    const [searchTerm, setSearchTerm] = useState("")
    const fetchJobs = e => {
        e.preventDefault()
        props.getJobs(searchTerm);
        setSearchTerm("")
    }

    useEffect(() => {
        getJobs("")
    }, [getJobs])

    const handleSearchTermChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <input type="text" value={searchTerm} onChange={e => handleSearchTermChange(e)}/>
            <button onClick={e => fetchJobs(e)}>Get Jobs</button>
        </div>
    )
}

const mapStateToProps = state => ({
    jobs: state.jobs,
    isFetching: state.isFetching,
    error: state.error
})

export default connect(mapStateToProps, { getJobs })(FetchJobsList)