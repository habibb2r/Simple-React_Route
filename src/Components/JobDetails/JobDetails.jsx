import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const JobDetails = () => {
    const [jobIdFind, setjobIdFind] = useState({});
    const [jobApplied, setjobApplied] = useState([])
    const jobs= useParams();
    const jobNew = parseInt(jobs.detailsId); 
    const jobsLoad = useLoaderData();
    let appliedIds =[];
    // jobs = jobs.detailsId;
    useEffect(() => {
        const storedArrayString = localStorage.getItem("jobID");
        if (storedArrayString) {
          const storedArray = JSON.parse(storedArrayString);
          setjobApplied(storedArray);
        }
      }, []);
    
    const appJobs = (id) =>{
        const updatedArray = [...jobApplied, id];
        setjobApplied(updatedArray);
        localStorage.setItem("jobID", JSON.stringify(updatedArray));
        toast.success('👌 Job Applied', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        // const setId = id;
        // appliedIds.push(id);
        // setjobApplied(setId);
        // const idString = JSON.stringify(jobApplied);
        // console.log(appliedIds)
        // localStorage.setItem("jobID",idString);
    };
    
    // console.log(jobNew)
    
    // console.log(jobsLoad);
    // console.log(jobIdFind)

    useEffect(() => {
        // Function to find object by ID
        const findJobById = (id) => {
          const found = jobsLoad.find(obj => obj.id === id);
          if (found) {
            setjobIdFind(found);
            // console.log('found')
          } else {
            setjobIdFind(null);
          }
        };
    
        findJobById(jobNew); 
      }, );

const {id,job_description,job_responsibility,educational_requirements,experiences,email, phone,location,salary,job_title,company_name} =jobIdFind;
   
    return (
        <div className='job-details-container'>
            <h1>Job Details</h1>
            <div className='job-details'>
                <div className='desc-job'>
                    <p><span className='desc-title'>Job Description : </span> {job_description}</p>
                    <p><span className='desc-title'>Job Responsibility :  </span> {job_responsibility}</p>
                    <p><span className='desc-title'>Educational Requirements : </span> {educational_requirements}</p>
                    <p><span className='desc-title'>Experience : </span> {experiences}</p>
                </div>

                <div className='details-job'>
                    <h3>Job Details :  {company_name}</h3>
                    <div>
                        <p>Salary : {salary}</p>
                        <p>Job Titile : {job_title}</p>
                    </div>
                    <h3>Contact Information</h3>
                    <div>
                        <p>Phone : {phone}</p>
                        <p>Email : {email}</p>
                        <p>Address : {location}</p>
                    </div>
                    <button onClick={() => appJobs(id)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;