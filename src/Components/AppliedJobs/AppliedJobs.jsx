import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';


const AppliedJobs = () => {
    const [appliedJob, setappliedJob] =useState([]);
    const loadData = useLoaderData();
    const jobIds = localStorage.getItem("jobID");
    if(jobIds){
        const jobId = JSON.parse(jobIds);
    }
    const matchedArrInfo = loadData.filter(job => jobIds.includes(job.id));

    console.log(matchedArrInfo);
    // const matchingJobs = [];
    // jobIds.map(id => {
    //   const matchingJob = loadData.find(item => item.id === id);
    //   if (matchingItem) {
    //     matchingInformation.push({ id, info: matchingJob.info });
    //   }
    // });
   
    
    
    // const loadData = useLoaderData();
    
    // setLoaded(loadData);
    
    // const matchingIds = appliedJob.filter(id => loadedData.some(item => item.id === id));
    // console.log(matchingIds)
    // const matchingInformation = matchingIds.map(id => loadedData.find(item => item.id === id));
    // console.log(matchingInformation)
    return (
        <div>
            <h2>Applied Jobs</h2>
            <div>
                {matchedArrInfo.map(info => <div className='everydiv' keys={info.id}>
                <div className='info-div'>
                    <img className='img-app' src={info.company_logo} alt="" />
                    <div>
                        <h4>{info.job_title}</h4>
                        <p>{info.company_name}</p>
                        <div className='site-time'>
                            <button>{info.remote_or_onsite}</button><button>{info.fulltime_or_parttime}</button>
                        </div>
                        <div>

                        </div>
                    </div>
            </div>
            <button className='viewDetails'>View details</button>
        </div>)};
            </div>
        </div>
    );
};

export default AppliedJobs;