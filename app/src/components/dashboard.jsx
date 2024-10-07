import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "./dashboard.css";
import Navbar from "./navbar";

const Dashboard = () => {
  const [notice, setNotice] = useState("");

  // Simulating fetching data (e.g., from an API)
  useEffect(() => {
    const fetchNotice = async () => {
      // Example: Fetch data from an API and set notice content
      const fetchedNotice = "Welcome to the dashboard! Stay updated with the latest information. Important announcements will appear here.";
      setNotice(fetchedNotice);
    };

    fetchNotice();
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />

      {/* Notice Board Section */}
      <Box className="notice-board">
        <Typography variant="h4" className="board-title">
          Notice Board
        </Typography>
        <Typography variant="body1" className="board-content">
          {notice}
        </Typography>
      </Box>

      {/* Materials Link */}
      <Box className="materials-link">
        <Typography variant="h5">Explore Build Materials</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle navigation to build materials page
          }}
        >
          Go to Build Materials
        </Button>
      </Box>

      {/* Materials Slider */}
      <Box className="materials-slider">
        <Typography variant="h5" className="slider-title">
          Best Materials on the Market
        </Typography>
        <Swiper spaceBetween={30} slidesPerView={3}>
          <SwiperSlide>
            <Card>
              <CardContent>Material 1</CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardContent>Material 2</CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardContent>Material 3</CardContent>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
};

export default Dashboard;

