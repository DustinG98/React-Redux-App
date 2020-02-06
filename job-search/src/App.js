import React from 'react';

import './App.css';
import FetchJobsList from './components/FetchJobsList'
import JobList from './components/JobList'

function App() {
  return (
    <div className="App">
      <h1>Job Search</h1>
      <FetchJobsList/>
      <JobList/>
    </div>
  );
}

export default App;
