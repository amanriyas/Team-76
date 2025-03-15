import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const leaderboardData = [
  { rank: 1, name: "John Ms CS", points: 10001 },
  { rank: 2, name: "Fatima Bsc CS", points: 10000 },
  { rank: 3, name: "Tom Bsc AI", points: 9691 },
  { rank: 4, name: "Ahmed MEng", points: 9524 },
  { rank: 5, name: "Sara Bsc AI", points: 9333 },
  { rank: 6, name: "Omar Bsc CS", points: 9000 },
];

const rankingData = {
  labels: leaderboardData.map((item) => item.name),
  datasets: [
    {
      label: "Points",
      data: leaderboardData.map((item) => item.points), 
      backgroundColor: [
        "#FFD700", 
        "#C0C0C0", 
        "#CD7F32", 
        "#FFFFFF", 
        "#FFFFFF",
        "#FFFFFF"
      ],
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

const Leaderboard = () => {
  return (
    <div className="p-8 w-full max-w-screen-xl mx-auto"> 
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bar Chart Ranking */}
        <div className="bg-[#9ec67f] bg-opacity-60 p-6 rounded-lg md:col-span-2 col-span-1 w-full h-96 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Overall Rankings</h2>
          <div className="h-4/5">
            <Bar
              data={rankingData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                  tooltip: {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFont: {
                      family: "monospace",
                      size: 14
                    },
                    bodyFont: {
                      family: "monospace",
                      size: 12
                    },
                    callbacks: {
                      label: function(context) {
                        return `Points: ${context.raw}`;
                      },
                      title: function(context) {
                        const index = context[0].dataIndex;
                        return `Rank #${leaderboardData[index].rank}: ${leaderboardData[index].name}`;
                      }
                    }
                  }
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      color: "#000000",
                      font: {
                        family: "monospace"
                      }
                    },
                  },
                  y: {
                    grid: {
                      color: "rgba(0,0,0,0.1)",
                    },
                    ticks: {
                      color: "#000000",
                      font: {
                        family: "monospace"
                      },
                      callback: function(value) {
                        if (value >= 1000) {
                          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                        return value;
                      }
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Personal Achievements */}
        <div className="bg-[#9ec67f] bg-opacity-30 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Personal Achievements</h2>
          <div className="mb-4 p-3 bg-white bg-opacity-60 rounded-md border-l-4 border-blue-700">
            <p className="text-lg">Current Rank: <span className="font-bold text-blue-800">4</span></p>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="mr-2 mt-1 text-green-700">✓</div>
              <p>Completed AI Mastery Course</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 text-green-700">✓</div>
              <p>Ranked #1 in Functional Programming</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 text-green-700">✓</div>
              <p>Published a Research Paper on Databases</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 text-green-700">✓</div>
              <p>Scored 98% in Algorithm Challenges</p>
            </div>
          </div>
        </div>

        {/* Subject-Specific Ranking */}
        <div className="bg-[#9ec67f] bg-opacity-60 p-6 rounded-lg md:col-span-3 col-span-1 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Subject-Specific Ranking - Your rankings in different subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white bg-opacity-40 rounded-lg border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Artificial Intelligence</h3>
                <span className="px-3 py-1 rounded-full text-sm font-bold">Rank 1</span>
              </div>
            </div>
            <div className="p-4 bg-white bg-opacity-40 rounded-lg border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Functional Programming</h3>
                <span className="px-3 py-1 rounded-full text-sm font-bold">Rank 2</span>
              </div>
            </div>
            <div className="p-4 bg-white bg-opacity-40 rounded-lg border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Team Project</h3>
                <span className="px-3 py-1 rounded-full text-sm font-bold">Rank 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
