Events:Subscribe('Player:Authenticated', function(player)
    local serverHeader ={
        map = SharedUtils:GetLevelName(),
        gamemode = SharedUtils:GetCurrentGameMode(),
    }
    local json = json.encode(serverHeader);

    NetEvents:SendTo('ServerInfo', player, json)
end)