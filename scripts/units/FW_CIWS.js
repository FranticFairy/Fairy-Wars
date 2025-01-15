var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);
        unit.setWeapon1ID("FW_WEP_CIWS");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);

    };
    
    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("CIWS Tank");
    };

    this.getDescription = function()
    {
        return qsTr("A special anti-air unit that shreds helicopters, and can protect one adjacent land units against incoming ranged attacks.");
    };

    this.getBaseCost = function()
    {
        return 13000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.startOfTurn = function(unit, map)
    {
        var variables = unit.getVariables();
        var unitDefendedVariable = variables.createVariable("UNITDEFENDED");
        unitDefendedVariable.writeDataInt32(1);
        if (unit.getTerrain() !== null)
        {
        }
    };
    this.doSupportDamageReduction = function(unit, damage, attacker, attackerPosition, defender, defenderPosition)
    {
        // gets called after the damage reduction has been applied
        var ret = [false, 0];
        var apply = ZCOUNIT_CHAPERON.getApplyReduction(unit, attackerPosition, defenderPosition);
        if (apply)
        {
            ret[0] = true;
            var variables = unit.getVariables();
            var unitDefendedVariable = variables.createVariable("UNITDEFENDED");
            unitDefendedVariable.writeDataInt32(0);
            unit.setAmmo1(unit.getAmmo1() - 1);
            if (unit.isStealthed(attacker.getOwner()))
            {
                ret[1] = ZCOUNIT_CHAPERON.getReductionDamage(damage, unit);
            }
        }
        return ret;
    };
    this.predictSupportDamageReduction = function(unit, damage, attacker, attackerPosition, attackerBaseHp,
                                                  defenderPosition, defender, luckMode)
    {
        var ret = [false, 0];
        var apply = ZCOUNIT_CHAPERON.getApplyReduction(unit, attackerPosition, defenderPosition);
        if (apply)
        {
            ret[0] = true;
            if (!unit.isStealthed(attacker.getOwner()))
            {
                ret[1] = ZCOUNIT_CHAPERON.getReductionDamage(damage, unit);
            }
        }
        return ret;
    };

    this.getReductionDamage = function(damage, unit)
    {
        return damage * unit.getHpRounded() / 10;
    };

    this.getApplyReduction = function(unit, attackerPosition, defenderPosition)
    {
        var variables = unit.getVariables();
        var unitDefendedVariable = variables.getVariable("UNITDEFENDED");
        var canDefend = 1;
        if (unitDefendedVariable !== null)
        {
            canDefend = unitDefendedVariable.readDataInt32();
        }
        var ret = false;
        var ammo1 = unit.getAmmo1();
        var pos = unit.getPosition();
        var unitDistance = globals.getDistance(defenderPosition, pos);
        if (canDefend > 0 &&
            unitDistance <= unit.getMaxRange(pos) &&
            globals.getDistance(defenderPosition, attackerPosition) > 1 &&
            ammo1 > 0)
        {
            ret = true;
        }
        return ret;
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_CIWS = new Constructor();
