import React from 'react';
import { PieChart, Pie, Cell, } from 'recharts';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
//

import {
    ComposedChart,
    Area,
    Bar,
    CartesianGrid,
    Legend,
    Scatter,
} from 'recharts';




const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    // Simple pie charts data
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];
    // data for BarChart
    const data03 = [
        {
            name: 'Page A',
            uv: 590,
            pv: 800,
            amt: 1400,
            cnt: 490,
        },
        {
            name: 'Page B',
            uv: 868,
            pv: 967,
            amt: 1506,
            cnt: 590,
        },
        {
            name: 'Page C',
            uv: 1397,
            pv: 1098,
            amt: 989,
            cnt: 350,
        },
        {
            name: 'Page D',
            uv: 1480,
            pv: 1200,
            amt: 1228,
            cnt: 480,
        },
        {
            name: 'Page E',
            uv: 1520,
            pv: 1108,
            amt: 1100,
            cnt: 460,
        },
        {
            name: 'Page F',
            uv: 1400,
            pv: 680,
            amt: 1700,
            cnt: 380,
        },
    ];


    return (
        <div>
            <h1 className='text-indigo-500 font-bold text-4xl py-5'> Graph Dashboard</h1>
            <div className='md:flex md:w-11/12 mx-auto'>
                <LineChart width={300} height={300} data={data}>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'investment'}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>

                <PieChart width={400} height={400}>
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>

                <ComposedChart
                    width={400}
                    height={300}
                    data={data03}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    <Scatter dataKey="cnt" fill="red" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;