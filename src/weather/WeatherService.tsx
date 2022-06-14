import {ErrorHandlingFetch} from "../environment/ErrorHandlingFetch";

export class WeatherService {
    private errorHandlingFetch: ErrorHandlingFetch

    constructor() {
        this.errorHandlingFetch = new ErrorHandlingFetch(window.location)
    }

    async getFavorites() {
        const response = await this.errorHandlingFetch.fetch("/api/v1/weather/favorites/", {
            method: "GET"
        })
        return response.json()
    }
}