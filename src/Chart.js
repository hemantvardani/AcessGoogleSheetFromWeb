
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













// import React, { PureComponent } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// export default class Chart extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }


// // import React from 'react'
// // import  { PureComponent } from 'react';
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

 



// // function Chart() {

// //     const data = [
// //         {
// //           name: 'Page A',
// //           uv: 4000,
// //           pv: 2400,
// //           amt: 2400,
// //         },
// //         {
// //           name: 'Page B',
// //           uv: 3000,
// //           pv: 1398,
// //           amt: 2210,
// //         },
// //         {
// //           name: 'Page C',
// //           uv: 2000,
// //           pv: 9800,
// //           amt: 2290,
// //         },
// //         {
// //           name: 'Page D',
// //           uv: 2780,
// //           pv: 3908,
// //           amt: 2000,
// //         },
// //         {
// //           name: 'Page E',
// //           uv: 1890,
// //           pv: 4800,
// //           amt: 2181,
// //         },
// //         {
// //           name: 'Page F',
// //           uv: 2390,
// //           pv: 3800,
// //           amt: 2500,
// //         },
// //         {
// //           name: 'Page G',
// //           uv: 3490,
// //           pv: 4300,
// //           amt: 2100,
// //         },
// //       ];

// //     //   static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

// //   return (
// //     <div>


// //       <ResponsiveContainer width="100%" height="100%">
// //         <BarChart
// //           width={500}
// //           height={300}
// //           data={data}
// //           margin={{
// //             top: 5,
// //             right: 30,
// //             left: 20,
// //             bottom: 5,
// //           }}
// //           barSize={20}
// //         >
// //           <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
// //         </BarChart>
// //       </ResponsiveContainer>


// //     </div>
// //   )
// // }

// // export default Chart


