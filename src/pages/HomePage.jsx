import React from 'react'
import Hero from '../component/Hero.jsx'
import HomeCard from '../component/HomeCard.jsx'
import JobListing from '../component/JobListing.jsx'
import ViewAllJobs from '../component/ViewAllJobs.jsx'


const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCard />
            <JobListing isHome = {true}/>
            <ViewAllJobs/>
        </>
    )
}

export default HomePage