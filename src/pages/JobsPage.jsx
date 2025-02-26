import React from 'react'
import { Outlet } from 'react-router-dom'
import JobListing from '../component/JobListing'


const JobsPage = () => {
  return (
    <>
    <Outlet/>
    <JobListing />
    </>
  )
}

export default JobsPage