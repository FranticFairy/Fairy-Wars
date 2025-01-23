var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_HNAV");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_LAA");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(1);

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
        return qsTr("Heavy Cruiser");
    };

    this.getDescription = function()
    {
        return qsTr("A heavy anti-ship naval unit. Strong in combat against most naval units, and can bombard land units, too. Weak to air attack.");
    };

    this.getBaseCost = function()
    {
        return 15000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

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
var FW_CA = new Constructor();
