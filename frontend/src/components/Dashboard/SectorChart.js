import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const PieChart = ({ data }) => {
  const color = useColorModeValue("white", "gray.800");
  if (!Array.isArray(data?.data) || data.data.length === 0) {
    return (
      <div>
        <Heading as="h2" mb={4}>
          Intensity Chart
        </Heading>
        <p>No data available</p>
      </div>
    );
  }
  const sectors = {};

  data.data.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
  };

  return (
    <Box
      p={6}
      borderRadius={20}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      ml={50}
      shadow="md"
      pb={100}
      bg={color}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4}>
        Sector Chart
      </Heading>

      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

export default PieChart;
