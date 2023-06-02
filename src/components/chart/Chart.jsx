import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './chart.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

const state = {
  labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  datasets: [
    {
      label: "",
      backgroundColor: "hsl(10, 79%, 65%)",
      hoverBackgroundColor: "hsl(186, 34%, 60%)",
      borderRadius: 8,
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    },
  ],
}

function Chart() {

  const monthAmount = 478.33;

  return (
    <div className='chart'>
      <h2 className="chart__title">Spending - Last 7 days</h2>
      <Bar data={state}  className='chart__bar'/>
      <div className="line"></div>
      <div className="chart__info">
        <div className="chart__info--month">
        Total this month <br />
        <span className="amount">${monthAmount}</span>
        </div>
        <div className="chart__info--lastMonth">
          <span className="percentage">+2.4%</span> <br />
          from last month
        </div>
      </div>
    </div>
  )
}

export default Chart