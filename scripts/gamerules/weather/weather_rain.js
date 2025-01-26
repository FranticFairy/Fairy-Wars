var Constructor = function () {
    this.getWeatherName = function () {

        return qsTr("Poor Weather");
    };

    this.getWeatherTerrainSprite = function () {

        return "weather_rain";
    };

    this.getDescription = function () {
        return qsTr("Poor weather hinders vision and movement for air units.");
    };

    this.getWeatherSymbol = function () {
        return "weather_symbol_rain";
    };

    this.getVisionrangeModifier = function () {

        return -1;
    };

    this.getMovementCostModifier = function (weather, unit, terrain, map) {
        var id = terrain.getID();
        if ((UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air)) {
            return 1;
        }
        return 0;
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
        if (fogMode != GameEnums.Fog_OfWar) {
            map.getGameRules().setFogMode(GameEnums.Fog_OfWar);
            for (var x = 0; x < map.getMapWidth(); x++) {
                for (var y = 0; y < map.getMapHeight(); y++) {
                    var playerCount = map.getPlayerCount();
                    for (var c = 0; c < playerCount; c++) {
                        var player = map.getPlayer(c);
                        player.addVisionField(x, y, 0, false, GameEnums.VisionType_Fogged)
                    }
                }
            }
        }
        if (queueAnimation !== null) {
            queueAnimation.queueAnimation(animation);
        }
    };

    this.deactivate = function (weather, map) {
        var variable = weather.getVariables().getVariable("FOGMODE");
        var mode = variable.readDataInt32();
        map.getGameRules().setFogMode(mode);
    };

    this.getDefaultWeatherChance = function () {
        return 15;
    };
}

Constructor.prototype = WEATHER;
var WEATHER_RAIN = new Constructor();
