import React from "react";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import './Landing.css';
import Header from "../common/Header";
import {History} from 'history';
import {WeatherService} from "../weather/WeatherService";
import WeatherFavorites from "../weather/WeatherFavoritesComponent";

interface LandingPageProps {
    history: History
    location: Location
    weatherService: WeatherService
}

interface LandingPageState {
}

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props: LandingPageProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title="NGINX Unit - WeatherService"/>
                <Box height="70vh" display="flex" className="lp-hero">
                    <Typography variant="h3" component="h1">
                        <div style={{textShadow: '2px 2px 2px #023859'}}>Rain or Shine!</div>
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
                <Container maxWidth={"lg"}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} lg={8}>
                            <h1>Welcome!</h1>
                            <p>This is our Demo and Playground Application for NGINX Unit. Glad to have you here.</p>
                            <p><b>Please Note: The code and implementation is NOT READY and was NEVER tested for
                                Production use cases.</b></p>
                            <h2>Tech-Stack</h2>
                            <ul>
                                <li>Frontend: ReactJS with Typescript</li>
                                <li>React-Router to handle In-App Routing</li>
                                <li>Weather-API: Python with Flask</li>
                                <li>Server: NGINX Unit</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} lg={4} paddingLeft="2rem">
                            <p>Weather Forecast Favorites</p>
                            <div>
                                <WeatherFavorites weatherService={this.props.weatherService}/>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}
