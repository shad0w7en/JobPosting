import React from 'react'
import JobCard from './JobCard';
import { useState, useEffect } from 'react';
import CustomSpinner from './CustomSpinner';

const JobListing = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobs(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

   
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'All Jobs'}
                </h2>

                {loading ? (
                    <CustomSpinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job, id) => (
                            <JobCard key={id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobListing