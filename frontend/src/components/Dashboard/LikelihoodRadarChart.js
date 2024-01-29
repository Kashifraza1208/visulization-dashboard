import React from "react";
import { Radar } from "react-chartjs-2";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

const LikelihoodRadarChart = ({ data }) => {
  const backgroundColor = useColorModeValue(
    "rgba(79, 59, 169, 0.7)",
    "rgba(144, 104, 190, 0.7)"
  );
  const borderColor = useColorModeValue(
    "rgba(79, 59, 169, 1)",
    "rgba(144, 104, 190, 1)"
  );
  const pointBackgroundColor = useColorModeValue("white", "black");
  const pointBorderColor = useColorModeValue(
    "rgba(79, 59, 169, 1)",
    "rgba(144, 104, 190, 1)"
  );
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

  const chartData = {
    labels: data.data.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: data.data.map((entry) => entry.likelihood),
        backgroundColor,
        borderColor,
        borderWidth: 2,
        pointBackgroundColor,
        pointBorderColor,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={color}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4} ml={6}>
        Likelihood Chart
      </Heading>

      <Radar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LikelihoodRadarChart;
