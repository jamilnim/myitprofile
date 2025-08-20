import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import './Strength.css';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ChartDataLabels
);

// --- Pie Chart Data ---
const pieData = {
  labels: ['Denim', 'Knit', 'Intimate', 'Headgear', 'Other'],
  datasets: [
    {
      label: 'Product Categories',
      data: [50, 20, 20, 5, 5],
      backgroundColor: ['#0074D9', '#2ECC40', '#FFDC00', '#FF851B', '#AAAAAA'],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  plugins: {
    legend: { display: false },
    datalabels: {
      color: '#000',
      formatter: (value, context) => {
        const sum = context.chart._metasets[0].total;
        const percent = ((value / sum) * 100).toFixed(0) + '%';
        return percent;
      },
      font: {
        weight: 'bold',
        size: 14,
      }
    }
  }
};

// --- Bar Chart Data ---
const barData = {
  labels: [
    'Leadership',
    'Salesmanship',
    'Product Knowledge',
    'Communication',
    'Transparency',
  ],
  datasets: [
    {
      label: 'Skill Score',
      data: [8, 7, 9, 9, 10],
      backgroundColor: '#0074D9',
      borderRadius: 4,
    },
  ],
};

const barOptions = {
  indexAxis: 'y',
  scales: {
    x: {
      max: 10,
      ticks: { stepSize: 1, color: '#ccc' },
      grid: { color: '#eee' }
    },
    y: {
      ticks: { color: '#bbb' },
      grid: { display: false }
    }
  },
  plugins: {
    legend: { display: false }
  },
  responsive: true,
  maintainAspectRatio: false,
};

// --- Job Timeline Line Chart ---
const jobData = [
  { year: 2009, company: 'ITPS' },
  { year: 2013, company: 'H&M (PM)' },
  { year: 2019, company: 'H&M (SM)' },
  { year: 2020, company: 'H&M (GPD)' },
  { year: 2023, company: 'Global Role' }
];

const lineData = {
  labels: jobData.map((job) => job.year),
  datasets: [
    {
      label: 'Career Path',
      data: jobData.map((_, index) => index + 1),
      borderColor: '#0074D9',
      backgroundColor: '#0074D9',
      pointBackgroundColor: '#0074D9',
      tension: 0.4,
    }
  ]
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => jobData[context.dataIndex].company
      }
    }
  },
  scales: {
    x: {
      title: { display: true, text: 'Year' },
      ticks: { color: '#333' }
    },
    y: {
      display: false
    }
  }
};

function Strength() {
  return (
    <section className="strength-section">
      <h2 className="strength-title"><span>Strength</span> Overview</h2>

      <div className="chart-row">
        <div className="strength-card"><Pie data={pieData} options={pieOptions} plugins={[ChartDataLabels]} /></div>
        <div className="strength-card bar"><Bar data={barData} options={barOptions} /></div>
        <div className="strength-card line"><Line data={lineData} options={lineOptions} /></div>
      </div>
    </section>
  );
}

export default Strength;
