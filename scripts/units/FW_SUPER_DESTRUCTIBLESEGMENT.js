var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(0);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();
        var coreIDVar = variables.createVariable("coreID");
        var coreID = coreIDVar.readDataString();
        coreIDVar.writeDataString("FW_SUPER_NOROSHI");

    };

    this.getUnitDamageID = function (unit) {
        return "FW_SHTANK";
    };

    this.loadSprites = function (unit) {
        var variables = unit.getVariables();
        var coreIDVar = variables.createVariable("coreID");
        var coreID = coreIDVar.readDataString();
        coreIDVar.writeDataString(coreID);
        var directionVar = variables.createVariable("direction");
        var direction = directionVar.readDataString();
        directionVar.writeDataString(direction);

        if(coreID.includes("_SE")) {
            coreID = coreID.replace("_SE","_ARMED_SE");
        }

        if(coreID.includes("_SW")) {
            coreID = coreID.replace("_SW","_ARMED_SW");
        }

        if(coreID.includes("_NE")) {
            coreID = coreID.replace("_NE","_ARMED_NE");
        }

        if(coreID.includes("_NW")) {
            coreID = coreID.replace("_NW","_ARMED_NW");
        }
        
        unit.loadSpriteV2(coreID +"+mask" + direction, GameEnums.Recoloring_Matrix);
        unit.loadSpriteV2(coreID + direction, GameEnums.Recoloring_None);
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIconVar.writeDataString(displayIcon);
        unit.loadSprite(displayIcon, false, false);
    };

    this.variant = false;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = [];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK_HEAVY";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Super;
    };

    this.getName = function()
    {
        return qsTr("Destructible Segment");
    };

    this.getDescription = function()
    {
        return qsTr("A segment of an experimental superunit");
    };

    this.getBaseCost = function()
    {
        return 14000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.getShowInEditor = function () {
        return false;
    }

    this.getLoadingPlace = function(unit)
    {
        var variables = unit.getVariables();

        var segmentVar = variables.createVariable("segmentID");
        var segmentID = segmentVar.readDataString();
        if(segmentID === "NW") {
            return 3;
        } else {
            return 0;
        }
    };
    this.transportList = ["FW_LHELI" , "FW_AHELI" , "FW_THELI"];

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_SUPER_DESTRUCTIBLESEGMENT = new Constructor();
