import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const assignment = [
        {
          "id": 1,
          "name": "Assignment 1",
          "marks": 60
        },
        {
          "id": 2,
          "name": "Assignment 2",
          "marks": 59
        },
        {
          "id": 3,
          "name": "Assignment 3",
          "marks": 50
        },
        {
          "id": 4,
          "name": "Assginment 4",
          "marks": 59
        },
        {
          "id": 5,
          "name": "Assignment 5",
          "marks": 50
        },
        {
          "id": 6,
          "name": "Assignment 6",
          "marks": 58
        },
        {
          "id": 7,
          "name": "Assignment 7",
          "marks": 60
        },
        {
          "id": 8,
          "name": "Assignment 8",
          "marks": 29
        }
        
   ];
    return (
        <div className='stat'>
            <RadarChart  cx={300}
            cy={250}
            outerRadius={150}
            width={700}
            height={500}
            data={assignment}>

      <Tooltip></Tooltip>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar
        name="Habib"
        dataKey="marks"
        stroke="#8884d8"
        fill="#4CF546"
        fillOpacity={0.6}
      />

            </RadarChart>
        </div>
    );
};

export default Statistics;