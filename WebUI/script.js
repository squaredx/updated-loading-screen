var canvas = document.getElementById('bg');
var context = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

var bgImage = '';


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawCanvas();
}

function drawCanvas() {
    var bg = new Image();
    bg.onload = () => {
        context.drawImage(bg, 1, 1, 709, 308, 0, 0, canvas.width, canvas.height);
    }
    bg.src = bgImage;

    //context.filter = 'blur(20px)'
}   

//TEST CONSOLE: initialize({levelname:'Levels/MP_Subway/MP_Subway', gamemode:'ConquestLarge0'});
function initialize(data) {

    const [mapName, mapImage] = parseMap(data.levelname);
    const fbLevel = data.levelname.split('/').pop();

    bgImage = 'fb://Levels/' + fbLevel + mapImage

    document.getElementById("map").innerHTML = mapName;
    document.getElementById("gamemode").innerHTML = parseGameMode(data.gamemode);

    resizeCanvas();
}

// hacky implementation below 
//TODO: maybe use a dict for the below parsing (might be more friendly for localization) 

//need to return both human map name and the map name for the image (because dice is inconsistent with naming schemes)
//TODO: Add custom map functionality some how
function parseMap(name) {
    switch (name) {
        //base
        case 'Levels/MP_001/MP_001':
            return ['Grand Bazaar', '/UI/MP01_Level'];
        case 'Levels/MP_003/MP_003':
            return ['Teheran Highway', '/UI/MP03_Level'];
        case 'Levels/MP_007/MP_007':
            return ['Caspian Border', '/UI/MP07_Level'];
        case 'Levels/MP_011/MP_011':
            return ['Seine Crossing', '/UI/MP11_Level'];
        case 'Levels/MP_012/MP_012':
            return ['Operation Firestorm', '/UI/MP12_Level'];
        case 'Levels/MP_013/MP_013':
            return ['Damavand Peak', '/UI/MP13_Level'];
        case 'Levels/MP_017/MP_017':
            return ['Noshahr Canals', '/UI/MP17_Level'];
        case 'Levels/MP_018/MP_018':
            return ['Kharg Island', '/UI/MP18_Level'];
        case 'Levels/MP_Subway/MP_Subway':
            return ['Operation Metro', '/UI/MP15_Level'];
        //XPack1
        case 'Levels/XP1_001/XP1_001':
            return ['Strike at Karkand', '/UI/XP1_001_Level'];
        case 'Levels/XP1_002/XP1_002':
            return ['Gulf of Oman', '/UI/XP1_002_Level'];
        case 'Levels/XP1_003/XP1_003':
            return ['Sharqi Peninsula', '/UI/XP1_003_Level'];
        case 'Levels/XP1_004/XP1_004':
            return ['Wake Island', '/UI/XP1_004_Level'];
        //XPack2
        case 'Levels/XP2_Palace/XP2_Palace':
            return ['Donya Fortress', '/UI/level_Palace'];
        case 'Levels/XP2_Office/XP2_Office':
            return ['Operation 925', '/UI/level_Office'];
        case 'Levels/XP2_Factory/XP2_Factory':
            return ['Scrapmetal', '/UI/level_Factory'];
        case 'Levels/XP2_Skybar/XP2_Skybar':
            return ['Ziba Tower', '/ui/level_Skybar']; //fr dice?
        //XPack3
        case 'Levels/XP3_Alborz/XP3_Alborz':
            return ['Alborz Mountains', '/UI/XP3_Alborz_Level'];
        case 'Levels/XP3_Shield/XP3_Shield':
            return ['Armored Shield', '/UI/XP3_Shield_Level'];
        case 'Levels/XP3_Desert/XP3_Desert':
            return ['Bandar Desert', '/UI/XP3_Desert_Level'];
        case 'Levels/XP3_Valley/XP3_Valley':
            return ['Death Valley', '/UI/XP3_Valley_Level'];
        //XPack4
        case 'Levels/XP4_Parl/XP4_Parl':
            return ['Azadi Palace', '/UI/XP4_Parl_Level'];
        case 'Levels/XP4_Quake/XP4_Quake':
            return ['Epicenter', '/UI/XP4_Earthquake_Level'];
        case 'Levels/XP4_FD/XP4_FD':
            return ['Markaz Monolith', '/UI/XP4_FD_Level'];
        case 'Levels/XP4_Rubble/XP4_Rubble':
            return ['Talah Market', '/UI/XP4_Rubble_Level'];
        //XPack5
        case 'Levels/XP5_001/XP5_001':
            return ['Operation Riverside', '/UI/XP5_001_Level'];
        case 'Levels/XP5_002/XP5_002':
            return ['Nebandan Flats', '/UI/XP5_002_Level'];
        case 'Levels/XP5_003/XP5_003':
            return ['Kiasar Railroad', '/UI/XP5_003_Level'];
        case 'Levels/XP5_004/XP5_004':
            return ['Sabalan Pipeline', '/UI/XP5_004_Level'];
        //Unknown
        default:
            console.log('UNKNOWN MAP: ' + name)
            return name;
    }
}

//TODO: Add external game mode functionality some how
function parseGameMode(gamemode) {
    switch (gamemode) {
        case 'ConquestLarge0':
            return 'Conquest Large';
        case 'ConquestAssaultLarge0':
            return 'Conquest Assault Large';
        case 'ConquestSmall0':
            return 'Conquest Small';
        case 'ConquestAssaultSmall0':
            return 'Conquest Assault Small';
        case 'ConquestAssaultSmall1':
            return 'Conquest Assault Small: Day 2'; //TODO: Check
        case 'RushLarge0':
            return 'Rush';
        case 'SquadRush0':
            return 'Squad Rush';
        case 'SquadDeathMatch0':
            return 'Squad Deathmatch'; 
        case 'TeamDeathMatch0':
            return 'Team Deathmatch';
        case 'TeamDeathMatchC0':
            return 'Team Deathmatch Close Quaters';
        case 'GunMaster0':
            return 'Gun Master';
        case 'Domination0':
            return 'Conquest Domination';
        case 'TankSuperiority0':
            return 'Tank Superiority';
        case 'Scavenger0':
            return 'Scavenger';
        case 'CaptureTheFlag0':
            return 'Capture The Flag';
        case 'AirSuperiority0':
            return 'Air Superiority';
        default:
            console.log('UNKNOWN GAMEMODE: ' + gamemode);
            return gamemode;
    }
}

function hideLoadingScreen() {
    //document.getElementById("map").style.display = "none";
}