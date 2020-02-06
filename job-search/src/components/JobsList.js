import React from 'react'
import { connect } from 'react-redux'

import { getJobs } from '../actions'

const JobsList = props => {
    console.log(props)
    const fetchJobs = e => {
        e.preventDefault()
        props.getJobs();
    }
    return (
        <div>
            <button onClick={e => fetchJobs(e)}>Get Jobs</button>
        </div>
    )
}

const mapStateToProps = state => ({
    jobs: state.jobs,
    isFetching: state.isFetching,
    error: state.error
})

export default connect(mapStateToProps, { getJobs })(JobsList)