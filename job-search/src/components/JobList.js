import React from 'react'
import { connect } from 'react-redux'

const JobList = props => {
    console.log(props)
    return (
        <div>
            <h1>Job List</h1>
                { props.error !== "" ? <p>{props.error.message}</p> : props.isFetching === true ? <p>Loading....</p>  : props.jobs.map(job => {
                return <div key={job.id}>
                            {<img style={{maxWidth: '100px', maxHeight: '100px'}} alt={`${job.company} logo`} src={job.company_logo}/>}
                            <h3>{job.company} - {job.title}</h3>
                            <h5>{job.location}</h5>
                            <p>{job.type}</p>
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