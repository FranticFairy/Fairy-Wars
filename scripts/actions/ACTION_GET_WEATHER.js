var Constructor = function () {

    var value = 0;

    this.canBePerformed = function(action, map)
    {
        return true;
    };

    this.isFinalStep = function (action, map) {
        return true;
    };
    this.perform = function (action, map) {
        var gameRules = map.getGameRules();
        var currentPlayer = map.getCurrentPlayer();
        for(var x = 0; x < (map.getCurrentDay()+32); x++) {
            var weather = gameRules.getWeatherAtDay(x,currentPlayer);
            if(weather === null) {
                x = map.getCurrentDay()+1000;
            } else {
                GameConsole.print(map.getCurrentDay()+x + ": " + ACTION_WEATHER_CONTROL.translateWeatherToCode(weather),1);
            }
        }
    };

    this.getValue = function() {
        return value;
    }
    this.getIcon = function(map)
    {
        return "weather_symbol_partlycloudy";
    };

    this.setValue = function(inputValue) {
        value = value + inputValue;
    }

    this.getActionText = function(map)
    {
        return qsTr("Get Weather");
    };
    this.getName = function()
    {
        return qsTr("Get Weather");
    };
    this.getDescription = function()
    {
        return qsTr("Print the weather into the console.");
    };
}

Constructor.prototype = ACTION;
var ACTION_GET_WEATHER = new Constructor();
