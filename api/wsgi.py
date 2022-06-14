from flask import Flask
import json
from flask_cors import CORS
from flaskr.weather.weatherapi import WeatherApi


app = Flask(__name__)
CORS(app)

@app.route('/api/v1/weather/favorites/')
def favorites():
  return json.dumps( WeatherApi().favorites)