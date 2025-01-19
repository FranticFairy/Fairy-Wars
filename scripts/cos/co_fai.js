var Constructor = function () {
    this.init = function (co, map) {
        co.setPowerStars(2);
        co.setSuperpowerStars(3);
    };

    this.loadCOMusic = function (co, map) {
        if (CO.isActive(co)) {
            switch (co.getPowerMode()) {
                case GameEnums.PowerMode_Power:
                    audio.addMusic("resources/music/cos/bh_power.mp3", 1091, 49930);
                    break;
                case GameEnums.PowerMode_Superpower:
                    audio.addMusic("resources/music/cos/bh_superpower.mp3", 3161, 37731);
                    break;
                case GameEnums.PowerMode_Tagpower:
                    audio.addMusic("resources/music/cos/bh_tagpower.mp3", 779, 51141);
                    break;
                default:
                    audio.addMusic("resources/music/cos/lash.mp3", 8885, 58311);
                    break;
            }
        }
    };

    this.activatePower = function (co, map) {
        var dialogAnimation = co.createPowerSentence();
        var powerNameAnimation = co.createPowerScreen(GameEnums.PowerMode_Power);
        dialogAnimation.queueAnimation(powerNameAnimation);

        var units = co.getOwner().getUnits();
        var animations = [];
        var counter = 0;
        units.randomize();
        for (var i = 0; i < units.size(); i++) {
            var unit = units.at(i);
            var animation = GameAnimationFactory.createAnimation(map, unit.getX(), unit.getY());
            var delay = globals.randInt(135, 265);
            if (animations.length < 5) {
                delay *= i;
            }
            animation.setSound("power11.wav", 1, delay);
            if (animations.length < 5) {
                animation.addSprite("power11", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay);
                powerNameAnimation.queueAnimation(animation);
                animations.push(animation);
            }
            else {
                animation.addSprite("power11", -map.getImageSize() * 1.27, -map.getImageSize() * 1.27, 0, 2, delay);
                animations[counter].queueAnimation(animation);
                animations[counter] = animation;
                counter++;
                if (counter >= animations.length) {
                    counter = 0;
                }
            }
        }
    };

    this.activateSuperpower = function (co, powerMode, map) {
        var dialogAnimation = co.createPowerSentence();
        var powerNameAnimation = co.createPowerScreen(powerMode);
        powerNameAnimation.queueAnimationBefore(dialogAnimation);

        var units = co.getOwner().getUnits();
        var animations = [];
        var counter = 0;
        units.randomize();
        for (var i = 0; i < units.size(); i++) {
            var unit = units.at(i);
            var animation = GameAnimationFactory.createAnimation(map, unit.getX(), unit.getY());
            var delay = globals.randInt(135, 265);
            if (animations.length < 7) {
                delay *= i;
            }
            if (i % 2 === 0) {
                animation.setSound("power12_1.wav", 1, delay);
            }
            else {
                animation.setSound("power12_2.wav", 1, delay);
            }
            if (animations.length < 7) {
                animation.addSprite("power12", -map.getImageSize() * 2, -map.getImageSize() * 2, 0, 2, delay);
                powerNameAnimation.queueAnimation(animation);
                animations.push(animation);
            }
            else {
                animation.addSprite("power12", -map.getImageSize() * 2, -map.getImageSize() * 2, 0, 2, delay);
                animations[counter].queueAnimation(animation);
                animations[counter] = animation;
                counter++;
                if (counter >= animations.length) {
                    counter = 0;
                }
            }
        }
    };

    this.getCOUnitRange = function (co, map) {
        return 2;
    };
    this.getCOArmy = function () {
        return "BH";
    };

    this.startOfTurn = function (co) {

    }

    this.postBattleActions = function (co, attacker, atkDamage, defender, gotAttacked, weapon, action, map) {

    }

    this.endOfTurn = function (co) {

    }

    this.superPowerTerrainDefenseModifier = 1;
    this.powerOffBonus = 10;
    this.powerDefBonus = 10;

    this.powerMultiplier = 5;
    this.superPowerMultiplier = 10;

    this.d2dTerrainBonus = 10;

    this.d2dCoZoneTerrainBonus = 10;
    this.d2dCoZoneOffBonus = 10;
    this.d2dCoZoneDefBonus = 10;

    this.powerMovement = 1;
    this.superPowerMovement = 2;

    var debuffedUnits = ["FW_BB", "FW_BOMBER", "FW_HTANK", "FW_SHTANK", "FW_HVY_ARTILLERY", "FW_ROCKET", "FW_FIGHTER", "FW_CV", "FW_TANK_DESTROYER"];
    this.debuffDebuff = -20;

    var buffedUnits = ["FW_LTANK", "FW_IFV", "FW_ATTACKER", "FW_CL", "FW_DD", "FW_LHELI", "FW_ACAR","FW_ASSAULT_GUN","FW_HALFTRACK"];
    this.buffBuff = 20;

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
        if (CO.isActive(co))
        {
            if (co.getPowerMode() === GameEnums.PowerMode_Superpower ||
                    co.getPowerMode() === GameEnums.PowerMode_Tagpower)
            {
                if(unit.getBaseMovementPoints() > 0) {
                    return CO_FAI.superPowerMovement;
                }
            }
            else if (co.getPowerMode() === GameEnums.PowerMode_Power)
            {
                if(unit.getBaseMovementPoints() > 0) {
                    return CO_FAI.powerMovement;
                }
            }
        }
        return 0;
    };

    this.getOffensiveBonus = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isDefender, action, luckmode, map) {
        if (CO.isActive(co)) {
            switch (co.getPowerMode()) {
                case GameEnums.PowerMode_Tagpower:
                case GameEnums.PowerMode_Superpower:
                case GameEnums.PowerMode_Power:
                    if (debuffedUnits.includes(attacker.getUnitID())) {
                        return CO_FAI.debuffDebuff + CO_FAI.powerOffBonus;
                    }
                    if (buffedUnits.includes(attacker.getUnitID())) {
                        return CO_FAI.buffBuff + CO_FAI.powerOffBonus;
                    }
                default:
                    if (debuffedUnits.includes(attacker.getUnitID())) {
                        return CO_FAI.debuffDebuff;
                    }
                    if (buffedUnits.includes(attacker.getUnitID())) {
                        return CO_FAI.buffBuff;
                    }
            }
        }
        return 0;
    };

    this.getDeffensiveBonus = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isAttacker, action, luckmode, map) {
        var buffAmount = 0;
        if (CO.isActive(co)) {
            if (co.getPowerMode() > GameEnums.PowerMode_Off) {
                buffAmount += CO_FAI.powerDefBonus;
            }
            if (buffedUnits.includes(defender.getUnitID())) {
                buffAmount += CO_FAI.powerDefBonus;
            }
        }
        return buffAmount;
    };

    this.getMovementcostModifier = function (co, unit, posX, posY, map) {
        if (CO.isActive(co)) {
            if (unit.getOwner() === co.getOwner()) {
                switch (co.getPowerMode()) {
                    case GameEnums.PowerMode_Tagpower:
                    case GameEnums.PowerMode_Superpower:
                        return -999;
                    case GameEnums.PowerMode_Power:
                    default:
                }
            }
        }
        return 0;
    };

    this.getCOUnits = function(co, building, map)
    {
        if (CO.isActive(co))
        {
            var buildingId = building.getBuildingID();
            if (buildingId === "FACTORY" ||
                    buildingId === "TOWN" ||
                    buildingId === "AMPHIBIOUSFACTORY" ||
                    buildingId === "DEPOT" ||
                    buildingId === "FORTHQ" ||
                    buildingId === "LABOR" ||
                    BUILDING.isHq(building))
            {
                return ["FW_IFV"];
            }
        }
    };
    this.getAiCoUnitBonus = function (co, unit, map) {
        return 1;
    };
    // CO - Intel
    this.getBio = function (co) {
        return qsTr("A bit of a menace with a strong love for cookies, likes using mid-tier units to perform an armoured push.");
    };
    this.getHits = function (co) {
        return qsTr("Cookies, Cute Girls, Causing Mischief");
    };
    this.getMiss = function (co) {
        return qsTr("Suffering the consequences of her actions.");
    };
    this.getCODescription = function (co) {
        return qsTr("Good at mid-game combat with standard units.\nBonuses to light/medium units, but penalties for expensive and slow units.\nCO Power allows for quick pushes.");
    };
    this.getLongCODescription = function (co, map) {
        var text = qsTr("\nSpecial Unit:\nIFV\n\nGlobal Effect: \nSmall boosts to some units, and penalties to others.") +
            qsTr("\n\nCO Zone Effect: \nFai does not gain bonuses from CO Zone use.");
        return text;
    };
    this.getPowerDescription = function (co) {

        var text = qsTr("Fai gains a %0% firepower boost, and units get to a +%1 bonus to movement.");
        text = replaceTextArgs(text, [CO_FAI.powerOffBonus, CO_FAI.powerMovement]);
        return text;
    };
    this.getPowerName = function (co) {
        return qsTr("Sprint");
    };
    this.getSuperPowerDescription = function (co) {
        var text = qsTr("Fai gains a %0% firepower boost, and units get to a +%1 bonus to movement. Her movements are unhindered by terrain.");
        text = replaceTextArgs(text, [CO_FAI.powerOffBonus, CO_FAI.superPowerMovement]);
        return text;
    };
    this.getSuperPowerName = function (co) {
        return qsTr("Sugar Rush");
    };

    var powerQuotes = [
    qsTr("All units! Forward, now!"),
    qsTr("Let's go quick, before they can react!"),
    qsTr("All of you are being too slow! Move, quickly!"),
    qsTr("I see an opening, we'll strike now!"),
    qsTr("Did you seriously think we wouldn't be able to close the distance?"),
    qsTr("You'd be surprised how much a simple rush can hurt!")];

    var superPowerQuotes = [
    qsTr("YEAH, LET'S GO!"),
    qsTr("hold on i need to go get more sugar."),
    qsTr("FORWARDS! BLOW UP EVERYTHING IN YOUR PATH!"),
    qsTr("LET'S BREAK THROUGH! NOTHING CAN STOP US!"),
    qsTr("*incomprehensible and worrying violence noises*"),
    qsTr("ALL UNITS, CHAAAAARGEEE!!!!.")];

    var powerQuotesTag = [
    qsTr("Let's do this! You and I, together for violence!"),
    qsTr("It's always fun to have someone to play with!"),
    qsTr("Okay! As we rehearsed! Let's make 'em hurt!"),
    qsTr("They don't stand a chance against us two!"),
    qsTr("*:D's menacingly, with echo, somehow*"),
    qsTr("Let's show them some magic tricks!.")];

    var powerQuotesTagTeina = [
    qsTr("I'LL TAKE THE TANKS!"),
    qsTr("TEINA! TRY TO KEEP UP!"),
    qsTr("THIS WAY, THIS WAY! WE'LL CATCH THEM OFF-GUARD!"),
    qsTr("I'VE BOUGHT EXTRA EXPLOSIVES, JUST FOR THIS!"),
    qsTr("LET'S REDECORATE THIS PLACE!"),
    qsTr("I'LL STOMP THEM OUT, YOU PUT SOME PRETTY THINGS ON THEIR GRAVES!")];

    var powerQuotesTagOldFai = [
    qsTr("...are you me?"),
    qsTr("I don't know whether you're me or not, BUT I LIKE YOUR ATTITUDE!"),
    qsTr("YEAH! LET'S DO THIS!!!"),
    qsTr("I'VE BOUGHT EXTRA EXPLOSIVES, LET'S MAKE A MESS!"),
    qsTr("...this is kinda weird but I vibe with it!"),
    qsTr("You feel familiar...")];

    this.getPowerSentences = function (co, map) {
        var otherCO = "";
        switch (co.getPowerMode()) {
            case GameEnums.PowerMode_Tagpower:
                for(var i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
                    if(map.getCurrentPlayer().getCO(i).getCoID() != "CO_FAI") {
                        otherCO = map.getCurrentPlayer().getCO(i).getCoID();
                        switch(otherCO) {
                            case "CO_TEINA":
                                return powerQuotesTagTeina;
                            case "CO_FAI_OLD":
                                return powerQuotesTagOldFai;
                        }
                    }
                }
                return powerQuotesTag;
            case GameEnums.PowerMode_Superpower:
                return superPowerQuotes;
            case GameEnums.PowerMode_Power:
                return powerQuotes;
            default:
                return [qsTr("No sentence found...? I'll show you a sentence; DEATH!")];
        }
    };
    this.getVictorySentences = function (co) {
        return [qsTr(":>"),
        qsTr("That was fun! Let's go again!"),
        qsTr("Weeeeeeeeeee!")];
    };
    this.getDefeatSentences = function (co) {
        return [qsTr("Iiiim... just gonna leave~!"),
        qsTr("Oh. Er. Hrm. That. Hm. I. Uh. Hrm. Uhm. Hm.")];
    };
    this.getName = function () {
        return qsTr("Fai");
    };
}

Constructor.prototype = CO;
var CO_FAI = new Constructor();
