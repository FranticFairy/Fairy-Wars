var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Naval_Medium) {
				return 1;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Medium Ships by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_mship+mov";
    };
    this.getName = function()
    {
        return qsTr("Medium Ships Move+");
    };
    this.getGroup = function()
    {
        return qsTr("Sea");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_MSHIP_MOV = new Constructor();
