import React, { useState, useEffect } from "react";
import { Box, Typography, Button,Card,CardContent} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./dashboard.css";
import Navbar from "./navbar";
import ma1 from "../images/ma1.jpg";
import ma2 from "../images/ma2.jpg";
import ma3 from "../images/ma3.jpg";
import ma4 from "../images/ma4.jpg";
import ma5 from "../images/ma5.jpg";

const PrevArrow = ({ onClick }) => (
  <div className="slick-prev" onClick={onClick} style={{ ...arrowStyle, left: "10px" }}>
    &#10094;
  </div>
);

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <div className="slick-next" onClick={onClick} style={{ ...arrowStyle, right: "10px" }}>
    &#10095;
  </div>
);

const arrowStyle = {
  display: "block",
  background: "#333",
  color: "#fff",
  borderRadius: "50%",
  padding: "10px",
  cursor: "pointer",
  zIndex: 1
};

const sliderSettings = {
  dots: true,           // Enable navigation dots
  infinite: true,       // Enable infinite scrolling
  speed: 3000,           // Speed of the transition (ms)
  slidesToShow: 3,      // Number of slides to show at once
  slidesToScroll: 3,    // Number of slides to scroll with each action
  autoplay: true,            // Enable auto-slide
  autoplaySpeed: 2000,
  cssEase: "linear",
  prevArrow: <PrevArrow />,  // Use custom Prev Arrow
  nextArrow: <NextArrow />,  // Use custom Next Arrow 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
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

  const materials = [{ name: "Material 1", image: ma1 },
    { name: "Material 2", image: ma2 },
    { name: "Material 3", image: ma3 },
    { name: "Material 4", image: ma4},
    { name: "Material 5", image: ma5 },
    { name: "Material 6", image: ma1 },];
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
      <Box className="materials-slider">
    <Typography variant="h5" className="slider-title">
      Best Materials on the Market
    </Typography>
    <Slider {...sliderSettings}>
        {materials.map((material, index) => (
          <Card key={index}>
            <CardContent>
              <img
                src={material.image}
                alt={material.name}
                style={{ width: "100%", height: "500px" }}
              />
              <Typography variant="body2" style={{ textAlign: "center", marginTop: "10px" }}>
                {material.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
  </Box>
    </div>
  );
};

export default Dashboard;

