Events:Subscribe('Player:Authenticated', function(player)

    local serverHeader ={
        level = SharedUtils:GetLevelName(),
        gamemode = SharedUtils:GetCurrentGameMode(),
        name = RCON:SendCommand('vars.serverName')[2],
        description = RCON:SendCommand('vars.serverDescription')[2]
    }
    local json = json.encode(serverHeader);

    NetEvents:SendTo('ServerInfo', player, json)
end)