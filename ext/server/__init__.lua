Events:Subscribe('Player:Authenticated', function(player)
    local serverHeader ={
        levelname = SharedUtils:GetLevelName(),
        gamemode = SharedUtils:GetCurrentGameMode(),
    }
    local json = json.encode(serverHeader);

    NetEvents:SendTo('ServerInfo', player, json)
end)