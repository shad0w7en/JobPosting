import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import HomeCard from './component/HomeCard'
import JobListing from './component/JobListing'
import ViewAllJobs from './component/ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListing/>
      <ViewAllJobs />
    </>
  )
}

export default App