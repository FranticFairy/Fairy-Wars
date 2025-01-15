var Constructor = function () {
    this.ping = function (unit, range, detectStealth) {
        var fields = globals.getCircle(0, range);
        var detectedUnits = [];
        for (var i = 0; i < fields.size(); i++) {
            var x = fields.at(i).x + unit.getX();
            var y = fields.at(i).y + unit.getY();
            if (map.onMap(x, y)) {
                var terrain = map.getTerrain(x, y);
                if (terrain != null) {
                    var targetUnit = terrain.getUnit()
                    if (targetUnit != null) {
                        if (targetUnit.getHidden() == false || (targetUnit.getHidden() === true && detectStealth === true)) {
                            detectedUnits.push(targetUnit);
                        }
                    }
                }
            }
        }
        return detectedUnits;
    }

    this.pingType = function (unit, range, typeString, detectStealth) {
        var detectedUnits = this.ping(unit, range, detectStealth);
        for (var i = 0; i < detectedUnits.length; i++) {
            var detectedUnit = detectedUnits[i];
            if (detectedUnit.getUnitType() == typeString) {
                unit.getOwner().addVisionField(detectedUnit.getX(), detectedUnit.getY(), 1, true);
            }
        }
    }

    this.pingID = function (unit, range, IDString, detectStealth) {
        var detectedUnits = this.ping(unit, range, detectStealth);
        for (var i = 0; i < detectedUnits.length; i++) {
            var detectedUnit = detectedUnits[i];
            var unitID = detectedUnit.getUnitID();
            if (IDString.includes(unitID)) {
                if(unitID === "FW_SAM" || unitID === "FW_SS") {
                    var variables = detectedUnit.getVariables();
                    var displayIconVar = variables.createVariable("displayIcon");
                    var displayIcon = displayIconVar.readDataString();
                    if(displayIcon != "+antiradar") {
                        unit.getOwner().addVisionField(detectedUnit.getX(), detectedUnit.getY(), 1, true);
                    }
                } else {
                    unit.getOwner().addVisionField(detectedUnit.getX(), detectedUnit.getY(), 1, true);
                }
            }
        }
    }

    this.pingAll = function (unit, range, detectStealth) {
        var detectedUnits = this.ping(unit, range, detectStealth);
        for (var i = 0; i < detectedUnits.length; i++) {
            var detectedUnit = detectedUnits[i];
            unit.getOwner().addVisionField(detectedUnit.getX(), detectedUnit.getY(), 1, true);
        }
    }
    this.getActionText = function(map)
    {
        return qsTr("Ping");
    };
    this.getName = function()
    {
        return qsTr("Ping");
    };
    this.getDescription = function()
    {
        return qsTr("Detect specific units at range without revealing other things.");
    };
}

Constructor.prototype = ACTION;
var ACTION_PING = new Constructor();
