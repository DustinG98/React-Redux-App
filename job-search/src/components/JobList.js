import React from 'react'
import { connect } from 'react-redux'

const JobList = props => {
    console.log(props)
    return (
        <div>
            <h2>Job List</h2>
                { props.error !== "" ? <p>{props.error.message}</p> : props.isFetching === true ? <p>Loading....</p>  : props.jobs.map(job => {
                return <div key={job.id}>
                            <h4>{job.title}</h4>
                        </div>
            }) }
        </div>
    )
}

const mapStateToProps = state => ({
    jobs: state.jobs,
    isFetching: state.isFetching,
    error: state.error
})

export default connect(mapStateToProps)(JobList)