import {WeatherService} from "./WeatherService";
import {Container, Grid} from "@mui/material";
import React from "react";
import {Link, useParams} from "react-router-dom";
import Header from "../common/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Weather {

}

interface WeatherProps {
    weatherService: WeatherService
}

const Weather = ({weatherService = new WeatherService()}: WeatherProps) => {
    const {city} = useParams()
    return (
        <div>
            <Header title="NGINX Unit - WeatherService"/>
                <Box height="35vh" display="flex" className="lp-hero-404">
                    <Typography variant="h3" component="h1">
                        <div style={{textShadow: '2px 2px 2px #023859'}}>Your Weather for {city}</div>
                    </Typography>
                        <div>
                             <Link to={`/`}>Back</Link>
                        </div>
                    <Typography variant="h3" component="h1">
                    </Typography>
                </Box>
            <Container maxWidth={"lg"}>
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={9}>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Weather;
