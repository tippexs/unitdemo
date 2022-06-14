import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NotFound = () => (
   <div>
                <Header title="NGINX Unit - WeatherService"/>
                <Box height="70vh" display="flex" className="lp-hero-404">
                    <Typography variant="h3" component="h1">
                        <div style={{textShadow: '2px 2px 2px #023859'}}>Not Found!</div>
                    </Typography>
                    <Typography variant="h3" component="h1">
                    </Typography>
                </Box>
                <div style={{height: "150px", overflow: "hidden"}}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-0.94,108.06 C150.00,150.00 300.41,-93.24 502.45,98.20 L500.00,0.00 L0.00,0.00 Z"
                              style={{stroke: "none", fill: "#024059"}}></path>
                    </svg>
                </div>
            </div>
);
export default NotFound;
