import {WeatherService} from "./WeatherService";
import {Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

interface WeatherFavoritesProps {
    weatherService: WeatherService
}

interface WeatherFavoritesState {
    favorites?: any;
    loading: boolean;
}


const renderFavorites = (favorites: Array<String>, loading: Boolean) => {
    if (loading) {
        return(<div>Loading</div>)
    } else {
        return (
            favorites.map((fav, index) => (
                <li key={index}>
                    <Link to={`/weather/${fav}`}>{fav}</Link>
                </li>
            )))
    }
}

const WeatherFavorites = ({weatherService = new WeatherService()}: WeatherFavoritesProps) => {

    const initFavorites: Array<String> = []
    const [favorites, setFavorites] = useState<Array<String>>(initFavorites);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getFavorites = async () => {
            const json: any = await weatherService.getFavorites()
            setFavorites(json)
            setLoading(false)
        }
        getFavorites().catch(console.error);
    }, [weatherService]);

    return (
        <div>
            <Container maxWidth={"lg"}>
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={9}>
                        {renderFavorites(favorites, loading)}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default WeatherFavorites;
