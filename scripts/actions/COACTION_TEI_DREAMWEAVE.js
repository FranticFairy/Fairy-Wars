var Constructor = function() {
    let VAR_DREAMWEAVING_COUNT = "fw_co_teina_DREAMWEAVING_COUNT"

    // Data table of what different terrain tiles *COUNT AS* for purposes of dreamweaving.
    // Tiles not mentioned are not valid targets for dreamweaving.
    let TYPE_REGULAR = Symbol("TYPE_REGULAR")
    let TYPE_FOREST = Symbol("TYPE_FOREST")
    let TYPE_STREET = Symbol("TYPE_STREET")

    let terrainInfo = {
        FOREST: TYPE_FOREST,
        FOREST1: TYPE_FOREST,
        FOREST2: TYPE_FOREST,
        FOREST3: TYPE_FOREST,
        PLAINS: TYPE_REGULAR,
        PLAINS_DESTROYED: TYPE_REGULAR,
        PLAINS_PLASMA: TYPE_REGULAR,
        STREET: TYPE_STREET,
        STREET1: TYPE_STREET,
        WASTELAND: TYPE_FOREST,
        SNOW: TYPE_REGULAR,
        SNOW_FOREST: TYPE_FOREST,
        SNOW_FOREST1: TYPE_FOREST,
        SNOW_FOREST2: TYPE_FOREST,
        SNOW_STREET: TYPE_STREET,
        SNOW_WASTELAND: TYPE_FOREST,
        DESERT: TYPE_REGULAR,
        DESERT_FOREST: TYPE_FOREST,
        DESERT_FOREST1: TYPE_FOREST,
        DESERT_PATH: TYPE_STREET,
        DESERT_PATH1: TYPE_STREET,
        DESERT_WASTELAND: TYPE_FOREST,
        WASTE: TYPE_REGULAR,
        WASTE_FOREST: TYPE_FOREST,
        WASTE_PATH: TYPE_STREET,
        WASTE_WASTELAND: TYPE_FOREST,
    }

    // Support functions
    let PLACE_IMPOSSIBLE = Symbol("PLACE_IMPOSSIBLE")
    let PLACE_POSSIBLE = Symbol("PLACE_POSSIBLE")
    let PLACE_COSMETIC = Symbol("PLACE_COSMETIC")

    let PLACING_PLAINS = Symbol("PLACING_PLAINS")
    let PLACING_FOREST = Symbol("PLACING_FOREST")
    let PLACING_STREET = Symbol("PLACING_STREET")

    let isCosmetic = function(placing, info) {
        switch (placing) {
            case PLACING_PLAINS: return info === TYPE_REGULAR
            case PLACING_FOREST: return info === TYPE_FOREST
            case PLACING_STREET: return info === TYPE_STREET
        }
    }
    let placeResult = function(placing, info) {
        switch (placing) {
            case PLACING_PLAINS: return "PLAINS"
            case PLACING_FOREST: return "FOREST"
            case PLACING_STREET: return "STREET"
        }
    }

    let canPlaceOnTile = function(action, map, placing) {
        let target = action.getActionTarget()
        let terrain = map.getTerrain(target.x, target.y)

        if (terrain.getBuilding())
            return PLACE_IMPOSSIBLE

        let id = terrain.getTerrainID()
        let info = terrainInfo[id]
        if (info && placeResult(placing, info) !== id) {
            if (isCosmetic(placing, info))
                return PLACE_COSMETIC
            else
                return PLACE_POSSIBLE
        } else {
            return PLACE_IMPOSSIBLE
        }
    }
    let canPlaceAnyOnTile = function(action, map) {
        if (canPlaceOnTile(action, map, PLACING_PLAINS) !== PLACE_IMPOSSIBLE) return true
        if (canPlaceOnTile(action, map, PLACING_FOREST) !== PLACE_IMPOSSIBLE) return true
        if (canPlaceOnTile(action, map, PLACING_STREET) !== PLACE_IMPOSSIBLE) return true
        return false
    }

    // Action implementation
    let checkTeinaCopCharges = function(action, map) {
        // check if this is Teina's global action
        for (let i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
            let co = map.getCurrentPlayer().getCO(i)
            if (co && co.getCoID() === "CO_TEINA") {
                let varDreamweavingCount = co.getVariables().getVariable(VAR_DREAMWEAVING_COUNT)
                if (varDreamweavingCount && varDreamweavingCount.readDataInt32() > 0)
                    return true
            }
        }
        return false
    }
    this.canBePerformed = function(action, map) {
        let unit = action.getTargetUnit()
        if (!unit) {
            if (!checkTeinaCopCharges(action, map))
                return false
            var viewplayer = map.getCurrentViewPlayer();
            let target = action.getActionTarget();
            if (!viewplayer.getFieldVisible(target.x, target.y))
                return false
        } else {
            if (unit.getOwner().getPlayerID() != map.getCurrentPlayer().getPlayerID())
                return false
            let actionTargetField = action.getActionTarget();
            let targetField = action.getTarget();
            if (!ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map))
                return false
        }
        if (!canPlaceAnyOnTile(action, map))
            return false
        return true
    }

    this.getName = function() {
        return qsTr("Dreamweave");
    };
    this.getDescription = function() {
        return qsTr("Manipulate the terrain using Teina's dream magic.");
    };
    this.getActionText = function(map) {
        return qsTr("Dreamweave")
    }
    this.getIcon = function(map) {
        return "build"
    }
    this.isFinalStep = function(action, map) {
        return action.getInputStep() !== 0
    }
    this.getStepInputType = function(action, map) {
        if (action.getInputStep() === 0) return "MENU"
        return ""
    }

    this.getStepData = function(action, data, map) {
        data.addData("Create Plains", "plains", "icon_dreamweaving_plains", 0, canPlaceOnTile(action, map, PLACING_PLAINS) !== PLACE_IMPOSSIBLE)
        data.addData("Create Forest", "forest", "icon_dreamweaving_forest", 0, canPlaceOnTile(action, map, PLACING_FOREST) !== PLACE_IMPOSSIBLE)
        data.addData("Create Street", "street", "icon_dreamweaving_street", 0, canPlaceOnTile(action, map, PLACING_STREET) !== PLACE_IMPOSSIBLE)
        GameConsole.print("Hello world! 1", 1)
    };

    this.perform = function (action, map) {
        GameConsole.print("Hello world! 2", 1)

        action.startReading();

        // Read action data
        let unit = action.getTargetUnit()
        let target = action.getActionTarget()

        let placingStr = action.readDataString()
        let placing
        GameConsole.print(placingStr+" "+target.x+" "+target.y, 1)
        switch (placingStr) {
            case "plains": placing = PLACING_PLAINS; break
            case "forest": placing = PLACING_FOREST; break
            case "street": placing = PLACING_STREET; break
            default: return
        }

        // Place the terrain
        let terrain = map.getTerrain(target.x, target.y)
        let info = terrainInfo[terrain.getTerrainID()]
        map.replaceTerrainOnly(placeResult(placing, info), target.x, target.y, true, false)
        ACTION_TERRAIN_LOADSPRITES.perform(target.x, target.y)

        // Check the unit
        if (unit) {
            Global[unit.getUnitID()].moveUnit(unit, action, map);
            unit.setHasMoved(true);
            return;
        }

        // Reduce dreamweaving "ammo" for COP
        for (let i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
            let co = map.getCurrentPlayer().getCO(i)
            if (co && co.getCoID() === "CO_TEINA") {
                let varDreamweavingCount = co.getVariables().getVariable(VAR_DREAMWEAVING_COUNT)
                if (varDreamweavingCount && varDreamweavingCount.readDataInt32() > 0)
                    varDreamweavingCount.writeDataInt32(varDreamweavingCount.readDataInt32() - 1)
            }
        }
    };

}

Constructor.prototype = ACTION;
var COACTION_TEI_DREAMWEAVE = new Constructor();
