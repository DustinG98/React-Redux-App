import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getJobs } from '../actions'

const FetchJobsList = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")
    const fetchJobs = e => {
        e.preventDefault()
        dispatch(getJobs(searchTerm));
        setSearchTerm("")
    }

    useEffect(() => {
        dispatch(getJobs(""));
    }, [dispatch])

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

// const mapStateToProps = state => ({
//     jobs: state.jobs,
//     isFetching: state.isFetching,
//     error: state.error
// })

// export default connect(mapStateToProps, { getJobs })(FetchJobsList)

export default FetchJobsList;