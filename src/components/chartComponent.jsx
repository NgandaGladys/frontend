import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const ChartsOverviewDemo=()=>{
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
      
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}


export default ChartsOverviewDemo;