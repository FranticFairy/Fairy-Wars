var Constructor = function () {
    this.canBePerformed = function (action, map) {
        return true;
    };
    this.getActionText = function (map) {
        return qsTr("Toggle Fog");
    };
    this.getIcon = function (map) {
        return "icon_fire";
    };
    this.isFinalStep = function (action, map) {
        return true;
    };

    this.perform = function (action, map) {
        var fogMode = map.getGameRules().getFogMode();
        var player = map.getCurrentPlayer();
        var variables = map.getVariables();
        var weatherVar = variables.createVariable("weather");
        var weather = weatherVar.readDataString();
        // only apply fog of war if the fog rules are softer
        if (weather === "")
        {
            weatherVar.writeDataString("night");
            map.getGameRules().setFogMode(GameEnums.Fog_Off);
            for(var x = 0; x < map.getMapWidth(); x++) {
                for(var y = 0; y < map.getMapHeight(); y++) {
                    var tile = map.getTerrain(x,y);
                    player.addVisionField(x,y,0,false,GameEnums.VisionType_Clear)
                }
            }
        } else {
            weatherVar.writeDataString("");
            map.getGameRules().setFogMode(GameEnums.Fog_OfWar);
            for(var x = 0; x < map.getMapWidth(); x++) {
                for(var y = 0; y < map.getMapHeight(); y++) {
                    var tile = map.getTerrain(x,y);
                    player.addVisionField(x,y,0,false,GameEnums.VisionType_Fogged)
                    //player.addVisionField(x,y,0,false,GameEnums.VisionType_Fogged)
                }
            }
        }
        
    };
    this.getName = function () {
        return qsTr("Toggle Fog");
    };
    this.getDescription = function () {
        return qsTr("A debug action to toggle fog on or off.");
    };
}

Constructor.prototype = ACTION;
var ACTION_TOGGLEFOG = new Constructor();
