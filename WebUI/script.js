function updateServerHeader(data){
    document.getElementById("map").innerHTML = parseMapName(data.map);
    document.getElementById("gamemode").innerHTML = parseGameMode(data.gamemode);
}


function parseMapName(name) {
    switch (name) {
        case 'Levels/XP1_004/XP1_004':
            return 'Wake Island';
            break;
    
        default:
            break;
    }
}

function parseGameMode(gamemode) {
    switch (gamemode) {
        case 'ConquestAssaultLarge0':
            return 'Conquest Assault Large';
            break;
    
        default:
            break;
    }
}

function hideLoadingScreen() {
    //document.getElementById("map").style.display = "none";
}