import React, { useEffect, useRef, useState } from "react";
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
      backgroundColor: [
        "red",
        "red",
        "red",
        "red",
        "red",
        "red",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
      borderRadius: 15, // Rounded corners for bars
      hoverBackgroundColor: "rgba(255, 99, 132, 1)", // Hover effect
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
          size: 14,
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
        color: "red", // Grid line color
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
    duration: 1000, // Smooth animation
    easing: "easeInOutQuart", // Smooth easing effect
  },
};

function SkillBarChart() {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (chartRef.current) {
        const rect = chartRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
        borderRadius: "20px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        opacity: isVisible ? 1 : 0, // Fade-in effect
        transform: isVisible ? "translateY(0)" : "translateY(50px)", // Slide-up effect
        transition: "opacity 0.8s ease, transform 0.8s ease", // Smooth transition
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
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