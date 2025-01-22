var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        if(displayIcon === "") {
            displayIcon = "+trn";
        }
        displayIconVar.writeDataString(displayIcon);
    };

    this.getMovementType = function()
    {
        return "MOVE_AIR";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };

    this.getName = function()
    {
        return qsTr("Transport Plane");
    };

    this.getDescription = function()
    {
        return qsTr("An unarmed transport plane. Can carry land units, but can only load and unload on (Temp) Airports. Infantry units can be dropped anywhere.");
    };

    this.getBaseCost = function()
    {
        return 16000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.getLoadingPlace = function(unit)
    {
        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        if(displayIcon === "+trn") {
            return 2;
        }
        return 0;
                
    };
    this.transportList = ["FW_COMV","FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS", "FW_IFV"];

    this.actionList = ["ACTION_SUPPORTALL_RATION", "ACTION_LOADOUT", "ACTION_LOAD","ACTION_UNLOAD", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];
    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            //Start of Turn Fuel Cost
            var fuelCosts = 4 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 4);
            if (fuelCosts < 0)
            {
                fuelCosts = 0;
            }
            unit.setFuel(unit.getFuel() - fuelCosts);
            var variables = unit.getVariables();
            var displayIconVar = variables.createVariable("displayIcon");
            var displayIcon = displayIconVar.readDataString();
            if(displayIcon === "+radar") {
                ACTION_PING.pingType(unit,4,GameEnums.UnitType_Air,false);
            }
            if(displayIcon === "+fuel") {
                ACTION_SUPPORTALL_RATION.giveRation(unit, map);
            }
        }
        UNIT.transporterRefilling(unit, map);
    };

    this.postAction = function(unit, action, map) {
        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        if(displayIcon === "+radar") {
            ACTION_PING.pingType(unit,4,GameEnums.UnitType_Air,false);
        }
    }

    this.createExplosionAnimation = function(x, y, unit, map)
    {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion + air", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion + air.wav");
        return animation;
    };

    this.useTerrainDefense = function()
    {
        return false;
    };

    this.useTerrainHide = function()
    {
        return false;
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
var FW_TRANSPORT = new Constructor();
