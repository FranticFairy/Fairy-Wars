var Constructor = function () {
    this.getWeatherName = function () {

        return qsTr("Foggy Weather");
    };

    this.getWeatherSymbol = function () {
        return "weather_symbol_mist";
    };

    this.getWeatherTerrainSprite = function () {

        return "weather_mist";
    };

    this.getDescription = function () {
        return qsTr("Foggy weather hinders vision slightly.");
    };

    this.activate = function (weather, map) {
        var animationCount = GameAnimationFactory.getAnimationCount();
        var queueAnimation = null;
        if (animationCount > 0) {
            queueAnimation = GameAnimationFactory.getAnimation(animationCount - 1);
        }
        var animation = GameAnimationFactory.createAnimation(map, 0, 0);
        animation.addSprite2("white_pixel", 0, 0, 3200, map.getMapWidth(), map.getMapHeight());
        animation.addTweenColor(0, "#00FFFFFF", "#FFFFFFFF", 3000, true);
        animation.setStartOfAnimationCall("ANIMATION", "preOnAnimationChangedAnimation");
        animation.setSound("rain.wav");
        var variable = weather.getVariables().createVariable("FOGMODE");
        var fogMode = map.getGameRules().getFogMode();
        variable.writeDataInt32(fogMode);
        // only apply fog of war if the fog rules are softer
        if (fogMode != GameEnums.Fog_OfShroud) {
            map.getGameRules().setFogMode(GameEnums.Fog_OfShroud);
            for (var x = 0; x < map.getMapWidth(); x++) {
                for (var y = 0; y < map.getMapHeight(); y++) {
                    var playerCount = map.getPlayerCount();
                    for (var c = 0; c < playerCount; c++) {
                        var player = map.getPlayer(c);
                        player.addVisionField(x, y, 0, false, GameEnums.VisionType_Shrouded)
                    }
                }
            }
        }
        if (queueAnimation !== null) {
            queueAnimation.queueAnimation(animation);
        }
    };

    this.getVisionrangeModifier = function () {

        return -1;
    };

    this.getDefaultWeatherChance = function () {
        return 20;
    };
}

Constructor.prototype = WEATHER;
var WEATHER_MIST = new Constructor();
