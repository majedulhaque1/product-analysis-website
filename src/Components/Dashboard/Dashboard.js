import React from 'react';
import { useEffect, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
const Dashboard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return (
        <div>
            <div>
                <h2>Investment VS Revenue</h2>
                <LineChart width={730} height={250} data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="revenue"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Dashboard;