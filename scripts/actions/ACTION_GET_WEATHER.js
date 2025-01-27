var Constructor = function () {

    var value = 0;

    this.canBePerformed = function(action, map)
    {
        return true;
    };

    this.isFinalStep = function (action, map) {
        if (action.getInputStep() === 0) {
            return false;
        }
        else {
            return true;
        }
    };

    this.perform = function (action, map) {
    };

    this.getValue = function() {
        return value;
    }
    this.getIcon = function(map)
    {
        return "weather_symbol_partlycloudy";
    };
    this.isFinalStep = function (action, map) {
        if (action.getInputStep() === 0) {
            return false;
        }
        else {
            return true;
        }
    };

    this.getStepInputType = function (action, map) {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0) {
            return "MENU";
        }
        return "";
    };

    this.getStepData = function (action, data, map) {
        var gameRules = map.getGameRules();
        var currentPlayer = map.getCurrentPlayer();
        for(var x = 0; x < (map.getCurrentDay()+20); x++) {
            var weather = gameRules.getWeatherAtDay(x,currentPlayer);
            if(weather === null) {
                x = map.getCurrentDay()+1000;
            } else {
                var ID = ACTION_WEATHER_CONTROL.translateWeatherToCode(weather);
                var name = weather.getWeatherName()
                var icon = weather.getWeatherSymbol()
                var day = map.getCurrentDay()+x
                data.addData(day + " " + name, ID, icon, day, true);
            }
        }
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
