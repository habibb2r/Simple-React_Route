import React from 'react';
import './JobCat.css'

const JobCat = (props) => {
    const {name, icon, job} =props.job;
    return (
        <div className='each-job'>
            <h2><i className={icon}></i></h2>
            <h4>{name}</h4>
            <p>{job} Jobs Available</p>
        </div>
    );
};

export default JobCat;