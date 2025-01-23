var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);
        unit.setWeapon1ID("FW_WEP_ROCKETS");

        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(3);
        unit.setMaxRange(5);
        unit.setVision(1);

    };

    this.loadSprites = function(unit)
    {
        unit.loadSpriteV2("FW_ROCKET+mask", GameEnums.Recoloring_Matrix);
        unit.loadSpriteV2("FW_ROCKET", GameEnums.Recoloring_None);
        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIconVar.writeDataString(displayIcon);
        unit.loadSprite(displayIcon, false, false);
    };

    this.getMovementType = function()
    {
        return "MOVE_TIRE_A";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Rocket Artillery");
    };

    this.getDescription = function()
    {
        return qsTr("A wheeled artillery piece that fires rockets. Struggles off-road, but has good ranged firepower.");
    };

    this.getBaseCost = function()
    {
        return 17000;
    };

	this.canMoveAndFire = function(unit)
    {
        return false;
    };
	
    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
        }
    };

    this.doWalkingAnimation = function(action, map)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(map, unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSpriteV2(unitID + "+mask", GameEnums.Recoloring_Matrix, 1);
        animation.loadSpriteV2(unitID, GameEnums.Recoloring_None, 1);
        animation.setSound("movetire.wav", -2);
        return animation;
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_ROCKET = new Constructor();
