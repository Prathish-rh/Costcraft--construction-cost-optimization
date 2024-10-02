import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "./dashboard.css";
import Navbar from "./navbar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <Navbar />
      <Box className="notice-board">
        <Typography variant="h4" className="board-title">
          Notice Board
        </Typography>
        <Typography variant="body1" className="board-content">
          Welcome to the dashboard! Stay updated with the latest information.
        </Typography>
      </Box>

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
