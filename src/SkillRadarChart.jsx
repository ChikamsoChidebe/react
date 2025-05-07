import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["React", "Node.js", "CSS", "MongoDB", "UI/UX Design", "JavaScript"],
  datasets: [
    {
      label: "Skill Proficiency (%)",
      data: [90, 80, 85, 70, 75, 95], // Skill levels in percentage
      backgroundColor: (context) => {
        const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(75, 192, 192, 0.8)");
        gradient.addColorStop(1, "rgba(153, 102, 255, 0.8)");
        return gradient;
      },
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      borderRadius: 10, // Rounded corners for bars
      hoverBackgroundColor: "rgba(255, 99, 132, 0.8)", // Hover effect
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        font: {
          size: 16,
          family: "Arial, sans-serif",
          weight: "bold",
        },
        color: "#333", // Legend text color
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.9)", // Tooltip background
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyFont: {
        size: 12,
      },
      bodyColor: "#fff", // Tooltip text color
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide grid lines on the x-axis
      },
      ticks: {
        color: "#666", // Tick color
        font: {
          size: 14,
          family: "Arial, sans-serif",
        },
      },
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0.1)", // Grid line color
        borderDash: [5, 5], // Dashed grid lines
      },
      ticks: {
        stepSize: 20, // Step size for y-axis
        color: "#666", // Tick color
        font: {
          size: 14,
          family: "Arial, sans-serif",
        },
      },
    },
  },
  animation: {
    duration: 1500, // Smooth animation
    easing: "easeOutBounce", // Bounce effect
  },
};

function SkillBarChart() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#4a4a4a",
          fontFamily: "Arial, sans-serif",
          marginBottom: "20px",
        }}
      >
        My Skill Proficiency
      </h2>
      <div style={{ height: "400px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default SkillBarChart;