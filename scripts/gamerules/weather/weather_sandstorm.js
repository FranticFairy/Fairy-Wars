var Constructor = function()
{
    this.getWeatherName = function()
    {

        return qsTr("Storm");
    };

    this.getDescription = function()
    {
        return qsTr("Terrible weather, greatly hinders movement and vision.");
    };

    this.getWeatherTerrainSprite = function()
    {

        return "weather_storm";
    };

    this.getWeatherSymbol = function()
    {
        return "weather_symbol_thunderstorm";
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
        animation.setSound("rain.wav");
        var variable = weather.getVariables().createVariable("FOGMODE");
        var fogMode = map.getGameRules().getFogMode();
        variable.writeDataInt32(fogMode);
        // only apply fog of war if the fog rules are softer
        if (fogMode != GameEnums.Fog_OfShroud)
        {
            map.getGameRules().setFogMode(GameEnums.Fog_OfShroud);
            for(var x = 0; x < map.getMapWidth(); x++) {
                for(var y = 0; y < map.getMapHeight(); y++) {
                    var playerCount = map.getPlayerCount();
                    for(var c = 0; c < playerCount;  c++) {
                        var player = map.getPlayer(c);
                        player.addVisionField(x,y,0,false,GameEnums.VisionType_Shrouded)
                    }
                }
            }
        }
        if (queueAnimation !== null)
        {
            queueAnimation.queueAnimation(animation);
        }
    };

    this.getMovementCostModifier = function(weather, unit, terrain, map)
    {
        var id = terrain.getID();
        if ((unit.getUnitType() === GameEnums.UnitType_Air) ||
            (id !== "STREET" &&
             id !== "STREET1" &&
             id !== "SNOW_STREET" &&
             id !== "BRIDGE" &&
             id !== "BRIDGE1" &&
             id !== "BRIDGE2" &&
             id !== "WASTE_PATH" &&
             id !== "DESERT_PATH" &&
             id !== "DESERT_PATH1" &&
             id !== "TELEPORTTILE" &&
            terrain.getBuilding() === null))
        {
            return 2;
        }
        return 0;
    };

    this.getVisionrangeModifier = function()
    {

        return -2;
    };

    this.getDefaultWeatherChance = function()
    {
        return 5;
    };
}

Constructor.prototype = WEATHER;
var WEATHER_SANDSTORM = new Constructor();
