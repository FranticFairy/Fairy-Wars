var Constructor = function () {

    //This will be an array of weathers that is slowly filled in as the game goes on, reflecting what the weather would be on the day associated with the index. In case powers change weather, but keeping track accurately is desired.
    var weather = [];

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
    Rainfall Aftermath: Clear weather, but mud lingers on some terrains. Hinders movement for land units on natural terrain.

    Light Snowfall: Quite pretty, light enough to not be a big hinderance.
    Snowfall: Snowfall reduces vision, and hinders air unit operations. Turns the landscape snowy.
    Heavy Snowfall: Intensifying snowfall that deposits a lot of snow on the ground. Greatly hinders movement for land and air units. Turns the landscape snowy.
    Blizzard: A terrifying blizzard, practically renders most land and air units unable to move. Turns the landscape snowy.
    Snow: Clear skies with lingering snow. Makes it harder to travel over natural terrain. Turns the landscape snowy.
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
