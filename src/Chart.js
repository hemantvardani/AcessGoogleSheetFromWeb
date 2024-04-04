
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import 'recharts/styles.css';



const data = [
    {
      ID: '1',     
      Avatar_Name: "test",
      Performance_Score:'2',
      
      
    },
    {
      ID: '12',     
      Avatar_Name: "test",
      Performance_Score:'12',
      
      
    },
    
  ];

const Chart = (arg1) => {
  console.log( arg1 );
  console.log( data )
  // console.log(data)
  return (
    <div>
       {/* <ResponsiveContainer width="100%" height="100%"> */}

       <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="ID" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Performance_Score" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      {/* </ResponsiveContainer> */}

      <Button>dlfj</Button>

      </div>
  );
}

export default Chart;


