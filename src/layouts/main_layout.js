import React, {Component} from  "react";
import Header from "../components/headers";
import { LineChart, Line } from 'recharts';


export default class MainLayout extends Component {
    render(){
        const data =[{
            uv:220
        },{
            uv:200
        },{
            uv:290
        },{
            uv:190
        },{
            uv:150
        }];
        return <div className="main-layout-container">
            <Header />
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    }
}