import React, { useEffect, useState } from 'react';
import './Home.css';
import HomePic from '../../img/home-person.png'
import JobCat from '../JobCat/JobCat';
import Feature from '../Feature/Feature';




const Home = () => {
    const [jobs, setJobs] = useState([]); 
    let [features, setFeatures] = useState([]);
    const [showFeature, setShowFeatures] = useState(4);

    // features=features.slice(0,4);

    const handleShowMore = () =>{
        setShowFeatures(features.length);
    };

    useEffect(() => {
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data));
    });

    useEffect(() => {
        fetch('jobinfo.json')
        .then(res => res.json())
        .then(data => setFeatures(data));
    } );
    return (
        <div>
            <div className='home-container'>
                <div className='home-desc'>
                    <h1>One Step <br />Closer To Your <br /> <span className='dr-color'>Dream Job</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae est necessitatibus voluptatibus ipsum numquam maxime ut. Praesentium, quibusdam aliquid!
                    </p>
                    <button>Get Started</button>
                </div>
                
                <img className='img-home' src={HomePic} alt="" />
                
            </div>
            <div className='job-category-container'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='category-section'>
                    {
                        jobs.map(job => <JobCat key={job.id} job={job}></JobCat>)
                    }
                </div>
            </div>

            <div className='job-featured-container'>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='job-features'>
                    {
                       features.slice(0, showFeature).map(feature => <Feature key={feature.id} feature={feature}></Feature>)
                    }
                </div>
                {
                    showFeature<features.length && (
                        <button className='show-button' onClick={handleShowMore}>Show More</button>
                    )
                }
            </div>
        </div>
    );
};

export default Home;