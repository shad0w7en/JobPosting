import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {usestate , useEffect} from 'react'
import CustomSpinner from '../component/CustomSpinner';

const JobPage = () => {
    const [job, setJob] = useState({});
    const [loading , setLoading] = useState(true);
    const {id} = useParams();

    useEffect( () => {
        const fetchJob = async() => {
            try{
                const response = await fetch(`/api/jobs/${id}`)
                console.log("response" + response);
                const data = await response.json()
                setJob(data);
            }catch(error){
                console.log(error)
        }finally{
            setLoading(false)
        }
    }
        fetchJob();
    },[]);
  return (<>{loading ? <CustomSpinner/> : <h1>{job.title}</h1>}</>)
  
}

export default JobPage