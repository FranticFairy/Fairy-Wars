var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_SAM");

        unit.setAmmo2(6);
        unit.setMaxAmmo2(6);
        unit.setWeapon2ID("FW_WEP_NAV");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(2);

    };

    this.getMovementType = function()
    {
        return "MOVE_SHIP";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };

    this.getName = function()
    {
        return qsTr("Cruiser");
    };

    this.getDescription = function()
    {
        return qsTr("An anti-air naval unit. Can carry two helicopters. Has ranged anti-air capability.");
    };

    this.getBaseCost = function()
    {
        return 11000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.transportList = ["FW_LHELI" , "FW_AHELI" , "FW_THELI"];

    this.actionList = ["ACTION_FIRE","ACTION_LOAD","ACTION_UNLOAD","ACTION_LOADOUT", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];
    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            //Start of Turn Fuel Cost
            var fuelCosts = 1 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 1);
            if (fuelCosts < 0)
            {
                fuelCosts = 0;
            }
            unit.setFuel(unit.getFuel() - fuelCosts);
        }
        UNIT.transporterRefilling(unit, map);
    };

    this.createExplosionAnimation = function(x, y, unit, map)
    {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion + water", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion + water.wav");
        return animation;
    };

	this.getTerrainAnimationBase = function(unit, terrain, defender, map)
    {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        return "base_" + weatherModifier + "air";
    };

    this.getTerrainAnimationForeground = function(unit, terrain, defender, map)
    {
        return "";
    };

    this.getTerrainAnimationBackground = function(unit, terrain, defender, map)
    {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        return "back_" + weatherModifier +"sea";
    };

    this.getTerrainAnimationMoveSpeed = function()
    {
        return 1;
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_CL = new Constructor();
