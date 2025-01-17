var Constructor = function() {
    this.init = function(co, map) {
        co.setPowerStars(3);
        co.setSuperpowerStars(3);
        co.getVariables().createVariable("incomeBonusProcs").writeDataInt32(0);
    };
    this.getCOArmy = function() {
        return "AC";
    };

    this.loadCOMusic = function(co, map) {
        if (CO.isActive(co)) {
            switch (co.getPowerMode()) {
                case GameEnums.PowerMode_Power:
                    audio.addMusic("resources/music/cos/power_awdc.mp3", 0, 0);
                    break;
                case GameEnums.PowerMode_Superpower:
                    audio.addMusic("resources/music/cos/power_awdc.mp3", 0, 0);
                    break;
                case GameEnums.PowerMode_Tagpower:
                    audio.addMusic("resources/music/cos/tagpower.mp3", 14611, 65538);
                    break;
                default:
                    audio.addMusic("resources/music/cos/isabella.mp3")
                    break;
            }
        }
    };

    // CO wiki information
    this.getName = function() {
        return qsTr("Teina");
    };

    this.getCODescription = function(co) {
        return qsTr("Favors slow offensives backed by her unique specialized infantry variants. Her CO power creates overwhelming economic advantages in drawn out games.");
    };
    this.getLongCODescription = function(co, map) {
        var text =
            qsTr("\nSpecial Unit:\nFaerie Infantry (replaces Motorcycle Infantry)\nDreamweaver Faerie (replaces Dozer and Minelayer)") +
            qsTr("\n\nGlobal Effect: \nCO Power does not increase in cost with usages.") +
            qsTr("\n\nCO Zone Effect: \nUnits in Teina's CO zone recover 1 HP at the start of each turn.");
        return text;
    };

    this.getBio = function(co) {
        return qsTr("A dream fairy who got lost in the unclaimed wilderness. Just wants to play!");
    };
    this.getHits = function(co) {
        return qsTr("Sleeping, mischief");
    };
    this.getMiss = function(co) {
        return qsTr("Serious people");
    };

    var powerQuotes = [
        qsTr("Welcome to my magical realm~!"),
        qsTr("Just a few brushstrokes here, and a few adjustments there..."),
        qsTr("This place needs a makeover!"),
        qsTr("I like pretty things!")
    ];
    var superPowerQuotes = [
        qsTr("Let's have a tea party!"),
        qsTr("Geez, not even any public transit?! Time to dream up a subway."),
        qsTr("Come on, this is TERRIBLE urban planning, get your acts together!!"),
        qsTr("How are you going to hold hands on a date in the park if you have no parks!?")
    ];
    var powerQuotesTag = [
        qsTr("Cover for me!"),
        qsTr("Go cause them problems!"),
        qsTr("I'll sit back and you can blow them up!"),
        qsTr("I'm helping!!")
    ];
    var powerQuotesTagFai = [
        qsTr("Are you sure about this, Fai?"),
        qsTr("Wait, wait, wait! Calm down!!"),
        qsTr("Heeey!! Wait for me!"),
        qsTr("Hold on hold on, where are you going, where you taking the tanks??!"),
        qsTr("Make sure to not break the decorations!")
    ];

    this.getPowerSentences = function(co) {
        var otherCO = "";
        switch (co.getPowerMode()) {
            case GameEnums.PowerMode_Tagpower:
                for(var i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
                    if (map.getCurrentPlayer().getCO(i).getCoID() != "CO_TEINA") {
                        otherCO = map.getCurrentPlayer().getCO(i).getCoID();
                    }
                }
                if (otherCO == "CO_FAI") return powerQuotesTagFai;
                return powerQuotesTag;
            case GameEnums.PowerMode_Superpower:
                return superPowerQuotes;
            case GameEnums.PowerMode_Power:
                return powerQuotes;
            default:
                return powerQuotes;
        }
    };
    this.getVictorySentences = function(co) {
        return [
            qsTr("Oh no! Did I play too hard?"),
            qsTr("Opps... I think I broke something..."),
            qsTr("That was fun! Wanna go again?")
        ];
    };
    this.getDefeatSentences = function(co) {
        return [
            qsTr("Ow...!"),
            qsTr("I don't like this game anymore... D:"),
            qsTr("Hey, no fair, I didn't get to make my dream castle! ;.;")
        ];
    };

    // D2D
    this.getCOUnits = function(co, building, map) {
        if (CO.isActive(co)) {
            var buildingId = building.getBuildingID();
            if (
                buildingId === "FACTORY" ||
                buildingId === "TOWN" ||
                buildingId === "AMPHIBIOUSFACTORY" ||
                buildingId === "DEPOT" ||
                buildingId === "FORTHQ" ||
                buildingId === "LABOR" ||
                BUILDING.isHq(building)
            ) {
                return ["FW_FAERIE_INFANTRY", "-FW_MOTOR", "FW_FAERIE_DREAMWEAVER", "-FW_DOZER", "-FW_ML"];
            }
            if (
                buildingId === "HARBOUR" ||
                buildingId === "TEMPORARY_HARBOUR"
            ) {
                return ["-FW_ML"];
            }
        }
    };
    this.getStarCost = function(co, map) {
        var startCost = 10000;
        if (map !== null) {
            var gamerules = map.getGameRules();
            var gainMode = gamerules.getPowerGainMode();
            if (
                gainMode === GameEnums.PowerGainMode_Money ||
                gainMode === GameEnums.PowerGainMode_Money_OnlyAttacker
            ) {
                startCost = CO.starFundsCost;
            } else if (
                gainMode === GameEnums.PowerGainMode_Hp ||
                gainMode === GameEnums.PowerGainMode_Hp_OnlyAttacker
            ) {
                startCost = CO.starHpCost;
            }
        }
        return startCost;
    };

    var coZoneHealing = 1;
    this.startOfTurn = function(co, map) {
        if (CO.isActive(co)) {
            var player = co.getOwner();
            if (!player.getIsDefeated()) {
                var counit = co.getCOUnit();
                var coRange = co.getCORange();
                var animations = [];
                var animation = null;
                var counter = 0;
                var viewplayer = map.getCurrentViewPlayer();
                var size = 0;
                var delay = 0;
                var unit = null;
                if (counit !== null) {
                    UNIT.repairUnit(counit, coZoneHealing, map);
                    var fields = globals.getCircle(1, coRange);
                    var x = counit.getX();
                    var y = counit.getY();
                    size = fields.size();
                    for (var i = 0; i < size; i++) {
                        var point = fields.at(i);
                        var unitX = x + point.x;
                        var unitY = y + point.y;
                        if (map.onMap(unitX, unitY)) {
                            unit = map.getTerrain(unitX, unitY).getUnit();
                            if ((unit !== null) && (unit.getOwner() === counit.getOwner())) {
                                UNIT.repairUnit(unit, coZoneHealing, map);
                                delay = globals.randInt(135, 265);
                                if (animations.length < 5) {
                                    delay *= i;
                                }
                                animation = GameAnimationFactory.createAnimation(map, unitX, unitY);
                                animation.setSound("power0.wav", 1, delay);
                                if (animations.length < 5) {
                                    animation.addSprite("power0", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay);
                                    animations.push(animation);
                                } else {
                                    animation.addSprite("power0", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay);
                                    animations[counter].queueAnimation(animation);
                                    animations[counter] = animation;
                                    counter++;
                                    if (counter >= animations.length) {
                                        counter = 0;
                                    }
                                }
                                if (!viewplayer.getFieldVisible(unitX, unitY)) {
                                    animation.setVisible(false);
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    this.getCOUnitRange = function(co, map) {
        return 2;
    };
    this.getAiCoUnitBonus = function(co, unit, map) {
        return 1;
    };

    // Utility functions
    var activeCoPowerAnimation = function() {
        var dialogAnimation = co.createPowerSentence();
        var powerNameAnimation = co.createPowerScreen(GameEnums.PowerMode_Power);
        dialogAnimation.queueAnimation(powerNameAnimation);

        var animation = GameAnimationFactory.createAnimation(map, 0, 0);
        animation.addSprite2("white_pixel", 0, 0, 3200, map.getMapWidth(), map.getMapHeight());
        animation.addTweenColor(0, "#00fbdbff", "#FFfbdbff", 3000, true);
        animation.setSound("mixkit-fairy-teleport-868.wav");
        powerNameAnimation.queueAnimation(animation);
    };
    var enableDreamweaving = function(isSuperPower) {
        // TODO
    };

    // CO Power
    this.getPowerName = function(co) {
        return qsTr("Fairytale Fantasia");
    };
    this.getPowerDescription = function(co) {
        var text = qsTr("Teina can create up to 6 Dreamweaving constructions and one unclaimed Formless Dream on unoccupied tiles in vision.");
        return text;
    };
    this.activatePower = function(co, map) {
        activeCoPowerAnimation();
        enableDreamweaving(false);
    };

    // Super CO Power
    this.getSuperPowerName = function(co) {
        return qsTr("Fabricated Elysium");
    };
    this.getSuperPowerDescription = function(co) {
        var text = qsTr("Teina can create up to 6 Dreamweaving constructions and one owned Formless Dream on unoccuped tiles in vision. All non-temporary structures she owns gain +200 income permanently (while she owns them).");
        return text;
    };
    this.activateSuperpower = function(co, powerMode, map) {
        activeCoPowerAnimation();
        enableDreamweaving(true);
        var incomeVar = co.getVariables().createVariable("incomeBonusProcs");
        incomeVar.writeDataInt32(incomeVar.readDataInt32() + 1);
    };
    this.getBonusIncome = function(co, building, income, map) {
        return 200 * co.getVariables().createVariable("incomeBonusProcs").readDataInt32();
    };
};

Constructor.prototype = CO;
var CO_TEINA = new Constructor();
