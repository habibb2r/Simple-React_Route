import React from 'react';
import './Feature.css'
import { Link } from 'react-router-dom';

const Feature = (props) => {


    const {id,company_logo,job_title,company_name,remote_or_onsite,fulltime_or_parttime,location,salary} =props.feature
    return (
        <div className='feature'>
            <img src={company_logo} alt="" />
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div className='remote-full'>
                <button>{remote_or_onsite}</button><button>{fulltime_or_parttime}</button>
            </div>
            <div className='loca-salar'>
                <p><i className="fa-solid fa-location-dot"></i> {location}</p>
                <p><i className="fa-solid fa-sack-dollar"></i> {salary}</p>
            </div>
            <Link className='view-details' to={`./details/${id}`}>View Details</Link>

        </div>
    );
};

export default Feature;