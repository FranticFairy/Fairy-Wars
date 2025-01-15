

TERRAIN.weatherData = [["weather_1sun", [Qt.point(0, 0), "", ""]],
["weather_snow", [Qt.point(-1, 1), "snow", "over_snow"]],
["weather_rain", [Qt.point(-2, 6), "rain", "over_rain"]],
["weather_sandstorm", [Qt.point(-2, 6), "rain", "over_rain"]],
["weather_mist", [Qt.point(0, 0), "", ""]],
["waste", [Qt.point(0, 0), "waste", ""]],];

TERRAIN.getWeatherModifier = function (map) {
    var weatherModifier = "";
    if (map !== null) {
        if (map.getGameRules().getCurrentWeather() != null) {
            var weather = map.getGameRules().getCurrentWeather().getWeatherId();
            var data = Global.getDataFromTable(weather, TERRAIN.weatherData);
            weatherModifier = data[1];
        }
    }
    return weatherModifier;
};

TERRAIN.getWeatherOverlayId = function(terrain, map)
{
    var overlay = "";
    if (map !== null)
    {
        if(map.getGameRules().getCurrentWeather() != null) {
            var weather     = map.getGameRules().getCurrentWeather().getWeatherId();
            var data        = Global.getDataFromTable(weather, TERRAIN.weatherData);
            overlay         = data[2];
        }
    }
    return overlay;
};