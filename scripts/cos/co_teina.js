var Constructor = function() {
    let VAR_INCOME_BONUS = "fw_co_teina_INCOME_BONUS"
    let VAR_DREAMWEAVING_COUNT = "fw_co_teina_DREAMWEAVING_COUNT"
    let VAR_PLACESITE_COUNT = "fw_co_teina_PLACESITE_COUNT"
    let VAR_SCOP = "fw_co_teina_SCOP"

    this.init = function(co, map) {
        co.setPowerStars(3)
        co.setSuperpowerStars(3)
    }
    this.getCOArmy = function() {
        return "AC"
    }

    this.loadCOMusic = function(co, map) {
        if (CO.isActive(co)) {
            switch (co.getPowerMode()) {
                case GameEnums.PowerMode_Power:
                    audio.addMusic("resources/music/cos/power_awdc.mp3", 0, 0)
                    break
                case GameEnums.PowerMode_Superpower:
                    audio.addMusic("resources/music/cos/power_awdc.mp3", 0, 0)
                    break
                case GameEnums.PowerMode_Tagpower:
                    audio.addMusic("resources/music/cos/tagpower.mp3", 14611, 65538)
                    break
                default:
                    audio.addMusic("resources/music/cos/isabella.mp3")
                    break
            }
        }
    }

    // CO wiki information
    this.getName = function() {
        return qsTr("Teina")
    }

    this.getCODescription = function(co) {
        return qsTr("Favors drawn out games with reinforced positions.")
    }
    this.getLongCODescription = function(co, map) {
        let text =
            qsTr("\nSpecial Unit:\nFaerie Infantry (replaces Motorcycle Infantry)\nDreamweaver Faerie (replaces Dozer and Minelayer)") +
            qsTr("\n\nGlobal Effect: \nCO Power does not increase in cost with usages.") +
            qsTr("\n\nCO Zone Effect: \nUnits in Teina's CO zone recover 1 HP at the start of each turn.")
        return text
    }

    this.getBio = function(co) {
        return qsTr("A dream fairy who got lost in the unclaimed wilderness. Just wants to play!")
    }
    this.getHits = function(co) {
        return qsTr("Sleeping, mischief")
    }
    this.getMiss = function(co) {
        return qsTr("Serious people, bad urban planning")
    }

    let powerQuotes = [
        qsTr("Welcome to my magical realm~!"),
        qsTr("Just a few brushstrokes here and there...~"),
        qsTr("This place needs a makeover!"),
        qsTr("I like pretty things!"),
    ]
    let superPowerQuotes = [
        qsTr("Come over and visit! We have tea parties here~"),
        qsTr("Geez, not even any busses?!"),
        qsTr("Come on, this is TERRIBLE urban planning, get your acts together!!"),
        qsTr("How are you going to hold hands on a date in the park if you have no parks!?"),
    ]
    let powerQuotesTag = [
        qsTr("Cover for me!"),
        qsTr("Go cause them problems!"),
        qsTr("I'll sit back and you can blow them up!"),
        qsTr("I'm helping!!"),
    ]
    let powerQuotesTagFai = [
        qsTr("Are you sure about this, Fai?"),
        qsTr("Wait, wait, wait! Calm down!!"),
        qsTr("Heeey!! Wait for me!"),
        qsTr("Hold on hold on, where are you going, where you taking the tanks??!"),
        qsTr("Make sure to not break the decorations!"),
    ]

    this.getPowerSentences = function(co) {
        let otherCO = ""
        switch (co.getPowerMode()) {
            case GameEnums.PowerMode_Tagpower:
                for(let i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
                    if (map.getCurrentPlayer().getCO(i).getCoID() != "CO_TEINA") {
                        otherCO = map.getCurrentPlayer().getCO(i).getCoID()
                    }
                }
                if (otherCO == "CO_FAI") return powerQuotesTagFai
                return powerQuotesTag
            case GameEnums.PowerMode_Superpower:
                return superPowerQuotes
            case GameEnums.PowerMode_Power:
                return powerQuotes
            default:
                return powerQuotes
        }
    }
    this.getVictorySentences = function(co) {
        return [
            qsTr("Oh no! Did I play too hard?"),
            qsTr("Opps... I think I broke something..."),
            qsTr("That was fun! Wanna go again?")
        ]
    }
    this.getDefeatSentences = function(co) {
        return [
            qsTr("Ow...!"),
            qsTr("I don't like this game anymore... D:"),
            qsTr("Hey, no fair, I didn't get to make my dream castle! ;.;")
        ]
    }

    // D2D
    this.getCOUnits = function(co, building, map) {
        if (CO.isActive(co)) {
            let buildingId = building.getBuildingID()
            if (
                buildingId === "FACTORY" ||
                buildingId === "TOWN" ||
                buildingId === "AMPHIBIOUSFACTORY" ||
                buildingId === "DEPOT" ||
                buildingId === "FORTHQ" ||
                buildingId === "LABOR" ||
                BUILDING.isHq(building)
            ) {
                return ["FW_FAERIE_INFANTRY", "-FW_MOTOR", "FW_FAERIE_DREAMWEAVER", "-FW_DOZER", "-FW_ML"]
            }
            if (
                buildingId === "HARBOUR" ||
                buildingId === "TEMPORARY_HARBOUR"
            ) {
                return ["-FW_ML"]
            }
        }
    }
    this.getStarCost = function(co, map) {
        let startCost = 10000
        if (map !== null) {
            let gamerules = map.getGameRules()
            let gainMode = gamerules.getPowerGainMode()
            if (
                gainMode === GameEnums.PowerGainMode_Money ||
                gainMode === GameEnums.PowerGainMode_Money_OnlyAttacker
            ) {
                startCost = CO.starFundsCost
            } else if (
                gainMode === GameEnums.PowerGainMode_Hp ||
                gainMode === GameEnums.PowerGainMode_Hp_OnlyAttacker
            ) {
                startCost = CO.starHpCost
            }
        }
        return startCost
    }

    let coZoneHealing = 1
    this.startOfTurn = function(co, map) {
        if (CO.isActive(co)) {
            let player = co.getOwner()
            if (!player.getIsDefeated()) {
                let counit = co.getCOUnit()
                let coRange = co.getCORange()
                let animations = []
                let animation = null
                let counter = 0
                let viewplayer = map.getCurrentViewPlayer()
                let size = 0
                let delay = 0
                let unit = null
                if (counit !== null) {
                    UNIT.repairUnit(counit, coZoneHealing, map)
                    let fields = globals.getCircle(1, coRange)
                    let x = counit.getX()
                    let y = counit.getY()
                    size = fields.size()
                    for (var i = 0; i < size; i++) {
                        let point = fields.at(i)
                        let unitX = x + point.x
                        let unitY = y + point.y
                        if (map.onMap(unitX, unitY)) {
                            unit = map.getTerrain(unitX, unitY).getUnit()
                            if ((unit !== null) && (unit.getOwner() === counit.getOwner())) {
                                UNIT.repairUnit(unit, coZoneHealing, map)
                                delay = globals.randInt(135, 265)
                                if (animations.length < 5) {
                                    delay *= i
                                }
                                animation = GameAnimationFactory.createAnimation(map, unitX, unitY)
                                animation.setSound("power0.wav", 1, delay)
                                if (animations.length < 5) {
                                    animation.addSprite("power0", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay)
                                    animations.push(animation)
                                } else {
                                    animation.addSprite("power0", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay)
                                    animations[counter].queueAnimation(animation)
                                    animations[counter] = animation
                                    counter++
                                    if (counter >= animations.length) {
                                        counter = 0
                                    }
                                }
                                if (!viewplayer.getFieldVisible(unitX, unitY)) {
                                    animation.setVisible(false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    this.endOfTurn = function(co, map) {
        let variables = co.getVariables()
        variables.createVariable(VAR_DREAMWEAVING_COUNT).writeDataInt32(0)
        variables.createVariable(VAR_PLACESITE_COUNT).writeDataInt32(0)
        variables.createVariable(VAR_SCOP).writeDataInt32(0)
    }

    this.getCOUnitRange = function(co, map) {
        return 2
    }
    this.getAiCoUnitBonus = function(co, unit, map) {
        return 1
    }

    // Utility functions
    let activeCoPowerAnimation = function(co, map, powerMode) {
        let dialogAnimation = co.createPowerSentence()
        let powerNameAnimation = co.createPowerScreen(powerMode)
        dialogAnimation.queueAnimation(powerNameAnimation)

        let animation = GameAnimationFactory.createAnimation(map, 0, 0)
        animation.addSprite2("white_pixel", 0, 0, 3200, map.getMapWidth(), map.getMapHeight())
        animation.addTweenColor(0, "#00fbdbff", "#FFfbdbff", 3000, true)
        animation.setSound("mixkit-fairy-teleport-868.wav")
        powerNameAnimation.queueAnimation(animation)
    }
    let enableDreamweaving = function(co, map, isSuperPower) {
        let variables = co.getVariables()
        variables.createVariable(VAR_DREAMWEAVING_COUNT).writeDataInt32(6)
        variables.createVariable(VAR_PLACESITE_COUNT).writeDataInt32(1)
        variables.createVariable(VAR_SCOP).writeDataInt32(isSuperPower ? 1 : 0)
    }

    // CO Power
    this.getPowerName = function(co) {
        return qsTr("Fairytale Fantasia")
    }
    this.getPowerDescription = function(co) {
        let text = qsTr("This turn, Teina can use Dreamweaving 6 times and build one unclaimed Dreamscape on visible empty tiles.")
        return text
    }
    this.activatePower = function(co, map) {
        activeCoPowerAnimation(co, map, GameEnums.PowerMode_Power)
        enableDreamweaving(co, map, false)
    }

    // Super CO Power
    this.getSuperPowerName = function(co) {
        return qsTr("Fabricated Elysium")
    }
    this.getSuperPowerDescription = function(co) {
        let text = qsTr("This turn, Teina can use Dreamweaving 6 times and build one owned Dreamscape on visible empty tiles. All non-temporary structures she owns gain +100 income permanently.")
        return text
    }
    let disallowedSites = ["BUILDSITE", "DREAM", "TEMPORARY_AIRPORT", "TEMPORARY_HARBOUR", "DEPOT"]
    this.activateSuperpower = function(co, powerMode, map) {
        activeCoPowerAnimation(co, map, powerMode)
        enableDreamweaving(co, map, true)

        // Apply bonus to all buildings the player owns.
        // TODO: Animation
        let buildings = co.getOwner().getBuildings();
        let size = buildings.size();
        for (let i = 0; i < size; i++) {
            let building = buildings.at(i)
            if (!disallowedSites.includes(building.getBuildingID())) {
                let incomeVar = building.getVariables().createVariable(VAR_INCOME_BONUS)
                incomeVar.writeDataInt32(incomeVar.readDataInt32() + 1)
            }
        }
    }
    this.getBonusIncome = function(co, building, income, map) {
        let variable = building.getVariables().getVariable(VAR_INCOME_BONUS)
        if (variable)
            return 100 * variable.readDataInt32()
        else
            return 0
    }
}

Constructor.prototype = CO
var CO_TEINA = new Constructor()
