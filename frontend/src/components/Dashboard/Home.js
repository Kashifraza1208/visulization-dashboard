import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, ChakraProvider, Flex, Grid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import RegionChart from "./RegionChart";
import TopicsRadarChart from "./TopicChart";
import RelevanceBubbleChart from "./Relevance";
import PieChart from "./SectorChart";
import LikelihoodRadarChart from "./LikelihoodRadarChart";
import CountryChart from "./CountryChart";
import Footer from "./Footer";

Chart.register(CategoryScale);

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/data");
        console.log(response);

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Navbar />
      <Sidebar />
      <IntensityChart data={data} />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr" }}
        gap={4}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <LikelihoodRadarChart data={data} />
        </Box>
      </Grid>

      <Flex
        direction={{ base: "column", md: "row" }}
        m={50}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="100%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <RegionChart data={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <TopicsRadarChart data={data} />
        </Box>
      </Flex>
      <RelevanceBubbleChart data={data} />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr" }}
        gap={4}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <PieChart data={data} />
        </Box>
      </Grid>
      {data && data.data && <CountryChart data={data} />}
      <Footer />
    </ChakraProvider>
  );
};

export default Home;
