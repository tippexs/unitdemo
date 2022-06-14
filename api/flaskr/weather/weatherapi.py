

class WeatherApi:

    def __init__(self):
        self.favorites = ["America/Seattle", "America/San-Francisco", "Ireland/Cork"]

    def favorites(self):
        return self.favorites