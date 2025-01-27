var Constructor = function () {
    this.getWeatherName = function () {

        return qsTr("Rain");
    };

    this.getWeatherTerrainSprite = function () {

        return "weather_rain";
    };

    this.getDescription = function () {
        return qsTr("Rainfall hinders air operations.");
    };

    this.getWeatherSymbol = function () {
        return "weather_symbol_rain_light";
    };

    this.getMovementCostModifier = function(weather, unit, terrain, map)
    {
        if (UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air)
        {
            return 1;
        }
        return 0;
    };

    this.activate = function(weather, map)
    {
        var animationCount = GameAnimationFactory.getAnimationCount();
        var queueAnimation = null;
        if (animationCount > 0)
        {
            queueAnimation = GameAnimationFactory.getAnimation(animationCount - 1);
        }
        var animation = GameAnimationFactory.createAnimation(map, 0, 0);
        animation.addSprite2("white_pixel", 0, 0, 3200, map.getMapWidth(), map.getMapHeight());
        animation.addTweenColor(0, "#00FFFFFF", "#FFFFFFFF", 3000, true);
        animation.setStartOfAnimationCall("ANIMATION", "preOnAnimationChangedAnimation");
        if (queueAnimation !== null)
        {
            queueAnimation.queueAnimation(animation);
        }
        if (map.getGameRules().getFogMode() === GameEnums.Fog_OfShroud)
        {
            map.getGameRules().setFogMode(GameEnums.Fog_OfWar);
            for(var x = 0; x < map.getMapWidth(); x++) {
                for(var y = 0; y < map.getMapHeight(); y++) {
                    var playerCount = map.getPlayerCount();
                    for(var c = 0; c < playerCount;  c++) {
                        var player = map.getPlayer(c);
                        player.addVisionField(x,y,0,false,GameEnums.VisionType_Fogged)
                    }
                }
            }
        }
    };

    this.getDefaultWeatherChance = function () {
        return 0;
    };
}

Constructor.prototype = WEATHER;
var WEATHER_RAIN = new Constructor();
