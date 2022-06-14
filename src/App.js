import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createBrowserHistory} from "history";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./landingpage/LandingPage";
import NotFound from "./common/NotFound";
import Footer from "./common/Footer";
import {WeatherService} from "./weather/WeatherService";
import Weather from "./weather/WeatherComponent";


const theme = createTheme();
const history = createBrowserHistory();
const location = window.location;
const weatherService = new WeatherService()

const footerLinks = [
    {title: 'Imprint', url: '#'},
    {title: 'Data-Privacy', url: '#'},
]

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth={false}>
                <main>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<LandingPage history={history} location={location}
                                                                        weatherService={weatherService}/>}/>
                            <Route excat path="/weather/:country/:city"
                                   element={<Weather weatherService={weatherService}/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </main>
            </Container>
            <Footer
                sections={footerLinks}
            />
        </ThemeProvider>
    );
}

export default App;
