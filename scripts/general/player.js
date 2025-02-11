PLAYER.defaultColors = [
    ["#A00000", "#A00000", "", "A00000",],
    ["#D10D0D", "#D10D0D", "", "D10D0D",],
    ["#ED0000", "#ED0000", "", "ED0000",],
    ["#CD4C18", "#CD4C18", "", "CD4C18",],
    ["#FF490D", "#FF490D", "", "FF490D",],
    ["#FC6C00", "#FC6C00", "", "FC6C00",],
    ["#E48220", "#E48220", "", "E48220",],
    ["#9C6127", "#9C6127", "", "9C6127",],
    ["#D39C36", "#D39C36", "", "D39C36",],
    ["#D2994E", "#D2994E", "", "D2994E",],
    ["#FCC464", "#FCC464", "", "FCC464",],
    ["#CEBD52", "#CEBD52", "", "CEBD52",],
    ["#D6D69A", "#D6D69A", "", "D6D69A",],
    ["#CBB387", "#CBB387", "", "CBB387",],
    ["#C7B805", "#C7B805", "", "C7B805",],
    ["#D9AB00", "#D9AB00", "", "D9AB00",],
    ["#8C7318", "#8C7318", "", "8C7318",],
    ["#86622E", "#86622E", "", "86622E",],
    ["#7D7951", "#7D7951", "", "7D7951",],
    ["#767626", "#767626", "", "767626",],
    ["#617C0E", "#617C0E", "", "617C0E",],
    ["#77AA08", "#77AA08", "", "77AA08",],
    ["#687C4C", "#687C4C", "", "687C4C",],
    ["#6C9C50", "#6C9C50", "", "6C9C50",],
    ["#A1A151", "#A1A151", "", "A1A151",],
    ["#98B06C", "#98B06C", "", "98B06C",],
    ["#929F88", "#929F88", "", "929F88",],
    ["#90E05C", "#90E05C", "", "90E05C",],
    ["#6DB14B", "#6DB14B", "", "6DB14B",],
    ["#3DC22D", "#3DC22D", "", "3DC22D",],
    ["#7DA685", "#7DA685", "", "7DA685",],
    ["#3F7F62", "#3F7F62", "", "3F7F62",],
    ["#007F46", "#007F46", "", "007F46",],
    ["#20918B", "#20918B", "", "20918B",],
    ["#3CCDC1", "#3CCDC1", "", "3CCDC1",],
    ["#63E7C5", "#63E7C5", "", "63E7C5",],
    ["#42BDF7", "#42BDF7", "", "42BDF7",],
    ["#7F92FF", "#7F92FF", "", "7F92FF",],
    ["#84BCD8", "#84BCD8", "", "84BCD8",],
    ["#8EB6C6", "#8EB6C6", "", "8EB6C6",],
    ["#7191B5", "#7191B5", "", "7191B5",],
    ["#0060D4", "#0060D4", "", "0060D4",],
    ["#314696", "#314696", "", "314696",],
    ["#684CC4", "#684CC4", "", "684CC4",],
    ["#8227B4", "#8227B4", "", "8227B4",],
    ["#9121FF", "#9121FF", "", "9121FF",],
    ["#9C8C9C", "#9C8C9C", "", "9C8C9C",],
    ["#7E8696", "#7E8696", "", "7E8696",],
    ["#727272", "#727272", "", "727272",],
    ["#857C76", "#857C76", "", "857C76",],
    ["#366686", "#366686", "", "366686",],
    ["#505074", "#505074", "", "505074",],
    ["#9F7EA3", "#9F7EA3", "", "9F7EA3",],
    ["#7F3F76", "#7F3F76", "", "7F3F76",],
    ["#7F3F5B", "#7F3F5B", "", "7F3F5B",],
    ["#A17FFF", "#A17FFF", "", "A17FFF",],
    ["#936BD3", "#936BD3", "", "936BD3",],
    ["#A447D3", "#A447D3", "", "A447D3",],
    ["#7F006E", "#7F006E", "", "7F006E",],
    ["#BD00A4", "#BD00A4", "", "BD00A4",],
    ["#FA428C", "#FA428C", "", "FA428C",],
    ["#FF66CC", "#FF66CC", "", "FF66CC",],
    ["#FF7FB6", "#FF7FB6", "", "FF7FB6",],
    ["#EC9CA4", "#EC9CA4", "", "EC9CA4",],
    ["#FF4F4E", "#FF4F4E", "", "FF4F4E",],
    ["#FD5D45", "#FD5D45", "", "FD5D45",],
    ["#D6634A", "#D6634A", "", "D6634A",],
    ["#701020", "#701020", "", "701020",],
    ["#7F0037", "#7F0037", "", "7F0037",],
    ["#AA003F", "#AA003F", "", "AA003F",],
    ["#B52744", "#B52744", "", "B52744",],
    ["#C34E75", "#C34E75", "", "C34E75",],
    ["#A13E4F", "#A13E4F", "", "A13E4F",],
    ["#AC3434", "#AC3434", "", "AC3434",],
    ["#B95450", "#B95450", "", "B95450",],
    ["#985333", "#985333", "", "985333",],
    ["#8C4C40", "#8C4C40", "", "8C4C40",],
["#908890", "#908890", "",   "neutral"], // neutral
];

PLAYER.startOfTurn = function(player, map)
{
    if(player.getCO(0) === null) {
        player.setCO("CO_FIELD_CO",0)
    }
    ACTION_WEATHER_CONTROL.handleWeather(map);
};

PLAYER.armies.push("FA");
PLAYER.armyNames.push("Fairy Alliance");