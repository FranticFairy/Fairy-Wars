var Constructor = function () {

    //This will be an array of weathers that is slowly filled in as the game goes on, reflecting what the weather would be on the day associated with the index. In case powers change weather, but keeping track accurately is desired.
    var weather = [];
    var lastDayTriggered = 0;

    var SUNNY = [["SUNNY",50], ["CLOUDY",30], ["DRIZZLE",10], ["MISTY",10]];
    var CLOUDY = [["SUNNY",15], ["CLOUDY",25], ["DRIZZLE",15], ["RAIN",5], ["SNOWY",15], ["SNOWFALL",5], ["MISTY",15], ["MIST",5]];

    var DRIZZLE = [["SUNNY",5], ["CLOUDY",20], ["DRIZZLE",20], ["RAIN",25], ["RAINSTORM",20], ["MISTY",10]];
    var RAIN = [["CLOUDY",15], ["DRIZZLE",30], ["RAIN",30], ["RAINSTORM",20], ["THUNDERSTORM",5]];
    var RAINSTORM = [["DRIZZLE",10], ["RAIN",40], ["RAINSTORM",35], ["THUNDERSTORM",15]];
    var THUNDERSTORM = [["DRIZZLE",5], ["RAIN",40], ["RAINSTORM",30], ["THUNDERSTORM",25]];

    var SNOWY = [["CLOUDY",15], ["SNOWY",35], ["SNOWFALL",45], ["MISTY",5]];
    var SNOWFALL = [["CLOUDY",5], ["SNOWY",10], ["SNOWFALL",40], ["SNOWSTORM",20], ["BLIZZARD",5], ["SNOW",15], ["MELTSNOW",5]];
    var SNOWSTORM = [["SNOWY",20], ["SNOWFALL",25], ["SNOWSTORM",20], ["BLIZZARD",15], ["SNOW",20]];
    var BLIZZARD = [["SNOWFALL",35], ["SNOWSTORM",40], ["BLIZZARD",15], ["SNOW",10]];
    var SNOW = [["SUNNY",5], ["CLOUDY",15], ["DRIZZLE",5], ["SNOWY",10], ["SNOWFALL",5], ["SNOW",30], ["MELTSNOW",20], ["MISTY",10]];
    var MELTSNOW = [["SUNNY",20], ["CLOUDY",25], ["DRIZZLE",5], ["SNOWY",10], ["MELTSNOW",35], ["MISTY",5]];

    var MISTY = [["SUNNY",15], ["CLOUDY",20], ["DRIZZLE",5], ["SNOWY",5], ["MISTY",35], ["MIST",20]];
    var MIST = [["SUNNY",5], ["CLOUDY",15], ["DRIZZLE",5], ["SNOWY",5], ["MISTY",25], ["MIST",30], ["FOG",15]];
    var FOG = [["MISTY",25], ["MIST",35], ["FOG",25], ["SHROUD",15]];
    var SHROUD = [["MISTY",20], ["MIST",25], ["FOG",35], ["SHROUD",20]];

    this.handleWeather = function(map) {
        var gameRules = map.getGameRules();
        var currentPlayer = map.getCurrentPlayer();
        if(lastDayTriggered === 0) {
            for(var x = 1; x < 30; x++) {
                ACTION_WEATHER_CONTROL.handleWeatherGetAndSet(gameRules,currentPlayer,x);
            }
            lastDayTriggered = map.getCurrentDay();
        }

        if(lastDayTriggered != map.getCurrentDay()) {
            lastDayTriggered = map.getCurrentDay();
            for(var y = map.getCurrentDay(); y < map.getCurrentDay()+14; y++) {
                var pickedWeather = gameRules.getWeatherAtDay(y,currentPlayer);
                if(pickedWeather === null || pickedWeather === undefined) {
                    ACTION_WEATHER_CONTROL.handleWeatherGetAndSet(gameRules,currentPlayer,y);
                    ACTION_WEATHER_CONTROL.handleWeatherGetAndSet(gameRules,currentPlayer,y+1);
                    ACTION_WEATHER_CONTROL.handleWeatherGetAndSet(gameRules,currentPlayer,y+2);
                    y = map.getCurrentDay()+20;
                } else {
                }
            }
        }
    }

    this.handleWeatherGetAndSet = function(gameRules, currentPlayer, day) {
        var previousWeather = gameRules.getWeatherAtDay(day-1,currentPlayer);
        var previousWeatherCode = ACTION_WEATHER_CONTROL.translateWeatherToCode(previousWeather);
        var weatherOptions = ACTION_WEATHER_CONTROL.getWeatherArray(previousWeatherCode);
        var chosenWeather = ACTION_WEATHER_CONTROL.pickWeather(weatherOptions);
        var chosenWeatherID = ACTION_WEATHER_CONTROL.translateCodeToID(chosenWeather);
        ACTION_WEATHER_CONTROL.changeWeatherOnDay(map,gameRules,chosenWeatherID,day);
    }

    this.changeWeatherOnDay = function(map, gamerules, weather, day) {
        gamerules.changeWeather(weather, map.getPlayerCount(), day);
    }

    this.getWeatherOnDay = function(map,gamerules,player,day) {
        return gamerules.getWeatherAtDay(day,player);
    }

    this.pickWeather = function(weatherArray) {
        var maximum = 0;
        for(var x = 0; x < weatherArray.length; x++) {
            maximum = maximum + weatherArray[x][1];
        }

        var pick = globals.randInt(1, maximum);
        var cumulative = 0;
        for(var x = 0; x < weatherArray.length; x++) {
            cumulative = cumulative + weatherArray[x][1];
            if(pick <= cumulative) {
                return weatherArray[x][0];
            }
        }
    }

    this.translateWeatherToCode = function(weather) {
        var weatherName = weather.getWeatherName();
        switch(weatherName) {
            case "Sunny":
            return "SUNNY"
            case "Cloudy":
            return "CLOUDY"

            case "Drizzle":
            return "DRIZZLE"
            case "Rain":
            return "RAIN"
            case "Rainstorm":
            return "RAINSTORM"
            case "Thunderstorm":
            return "THUNDERSTORM"

            case "Snowy":
            return "SNOWY"
            case "Snowfall":
            return "SNOWFALL"
            case "Snowstorm":
            return "SNOWSTORM"
            case "Blizzard":
            return "BLIZZARD"

            case "Lingering Snow":
            return "SNOW"
            case "Melting Snow":
            return "MELTSNOW"

            case "Misty":
            return "MISTY"
            case "Mist":
            return "MIST"
            case "Fog":
            return "FOG"
            case "Shroud":
            return "SHROUD"

            default:
            return "SUNNY"
        }
    }

    this.translateCodeToID = function(string) {
        return "WEATHER_"+string;
        switch(string) {
            case "SUNNY":
            return "WEATHER_SUNNY"
            case "CLOUDY":
            return "WEATHER_CLOUDY"

            case "DRIZZLE":
            return "WEATHER_DRIZZLE"
            case "RAIN":
            return "WEATHER_1SUN"
            case "RAINSTORM":
            return "WEATHER_1SUN"
            case "THUNDERSTORM":
            return "WEATHER_1SUN"

            case "SNOWY":
            return "WEATHER_1SUN"
            case "SNOWFALL":
            return "WEATHER_1SUN"
            case "SNOWSTORM":
            return "WEATHER_1SUN"
            case "BLIZZARD":
            return "WEATHER_1SUN"

            case "SNOW":
            return "WEATHER_1SUN"
            case "MELTSNOW":
            return "WEATHER_1SUN"

            case "MISTY":
            return "WEATHER_1SUN"
            case "MIST":
            return "WEATHER_1SUN"
            case "FOG":
            return "WEATHER_1SUN"
            case "SHROUD":
            return "WEATHER_1SUN"

            default:
            return "WEATHER_SNOW"
        }
    }

    this.getWeatherArray = function(string) {
        switch(string) {
            case "SUNNY":
            return SUNNY
            case "CLOUDY":
            return CLOUDY

            case "DRIZZLE":
            return DRIZZLE
            case "RAIN":
            return RAIN
            case "RAINSTORM":
            return RAINSTORM
            case "THUNDERSTORM":
            return THUNDERSTORM

            case "SNOWY":
            return SNOWY
            case "SNOWFALL":
            return SNOWFALL
            case "SNOWSTORM":
            return SNOWSTORM
            case "BLIZZARD":
            return BLIZZARD

            case "SNOW":
            return SNOW
            case "MELTSNOW":
            return MELTSNOW

            case "MISTY":
            return MISTY
            case "MIST":
            return MIST
            case "FOG":
            return FOG
            case "SHROUD":
            return SHROUD

            default:
            return SUNNY
        }
    }

    /*
    Each weather will have a % chance to follow up an existing weather based on how much sense it makes. No jumping from Sunny Weather to Thunderstorm to Melting Snow to Blizzard.
    There will be a chance to generate a 'weather buildup' which will push the system towards ramping up weather to a specific desired weather, rather than generating based on what weather is there already.
    This system will look ahead and past the default 2-day prediction, but weather will be somewhat predictable, so you can look at what weather you're getting 2 days from now and make a rough prediction of what you'll get.

    WEATHERS:
    Sunny: Clear skies, low likelihood of foul weather. No negative effects. Likely followed by Sunny or Cloudy weather.
    Cloudy: Overcast skies, but not bad enough to cause hinderance. Can lead to foul weather.
    Drizzle: Light rain, not enough to be a hinderance. Can lead to worse rainstorms, or clear up again.
    Rain: Rainfall hinders air operations.
    Rainstorm: Heavy rain makes the ground muddy, and turns the seas choppy. Hinders movement and reduces vision.
    Thunderstorm: Truly awful weather that will make anyone stay indoors. Hinders movement and obscures vision, causing shroud.

    Light Snowfall: Quite pretty, light enough to not be a big hinderance.
    Snowfall: Snowfall reduces vision, and hinders air unit operations. Turns the landscape snowy.
    Heavy Snowfall: Intensifying snowfall that deposits a lot of snow on the ground. Greatly hinders movement for land and air units. Turns the landscape snowy.
    Blizzard: A terrifying blizzard, practically renders most land and air units unable to move. Turns the landscape snowy.
    Lingering Snow: Clear skies with lingering snow. Makes it harder to travel over natural terrain. Turns the landscape snowy.
    Melting Snow: Clear skies with only a bit of snow remaining. Doesn't cause hinderance. Turns the landscape snowy.

    Misty: Light mist, not nearly enough to cause a problem, but can lead to denser mist.
    Mist: Hinders vision slightly, but provides no other obstructions.
    Fog: Fog hinders vision further than mist does.
    Dense Fog: Very dense fog that makes seeing ahead almost impossible. Reduces vision to 1 and inflicts Shroud.
    */

    this.getIcon = function (map) {
        return "build";
    };

    this.getActionText = function (map) {
        return qsTr("Control Weather");
    };

    this.getName = function () {
        return qsTr("Control Weather");
    };

    this.getDescription = function () {
        return qsTr("Handler for all things weather-related.");
    };
}

Constructor.prototype = ACTION;
var ACTION_WEATHER_CONTROL = new Constructor();
