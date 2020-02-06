import React from 'react'
import { useSelector } from 'react-redux'

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: "28vw",
        height: 300,
        margin: "1% 1%",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 0
    }
})

const JobList = () => {
    const classes = useStyles();
    //state from redux
    const state = useSelector(state => state)
    console.log(state)
    //deconstruct jobs, error, and isFetching out of state
    const { jobs, error, isFetching } = state;

    const openInNewTab = (e, url) => {
        e.preventDefault()
        var win = window.open(url, '_blank');
        win.focus()
    }
    return (
        <div>
            <div className="jobList">
                    { error !== "" ? <p>{error.message}</p> : isFetching === true ? <p>Loading....</p> : jobs.length === 0 ? <p>No jobs found... :(</p>  : jobs.map(job => {
                    return <Card key={job.id} className={classes.root} variant="outlined" >
                                {<img style={{maxWidth: '150px', maxHeight: '100px'}} alt={`${job.company} logo`} src={job.company_logo}/>}
                                <h3>{job.company} - </h3>
                                <h4>{job.title}</h4>
                                <h5>{job.location}</h5>
                                <p>{job.type}</p>
                                <Button variant="contained" color="primary" onClick={(e) => openInNewTab(e, job.url)}>Apply</Button>
                            </Card>
                }) }
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     jobs: state.jobs,
//     isFetching: state.isFetching,
//     error: state.error
// })

// export default connect(mapStateToProps)(JobList)
export default JobList