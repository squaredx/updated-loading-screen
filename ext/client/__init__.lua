--require('__shared/common')

Events:Subscribe('Extension:Loaded', function()

    NetEvents:Subscribe('ServerInfo', recieveData)

    WebUI:Init()
    --WebUI:ExecuteJS('updateServerHeader(' .. serverHeaderJson .. ')')
    
end)

--at the end (when spawn screen shows)
Events:Subscribe('Player:Connected', function(player)
    WebUI:ExecuteJS('hideLoadingScreen()')
    --WebUI:Hide()
end)

--will be used to hide the loading screen
Events:Subscribe('Level:LoadingInfo', function(screenInfo)
    --print(screenInfo)
end)

function recieveData(data)
    WebUI:ExecuteJS('updateServerHeader(' .. data .. ')')
end

--install a hook for the PushScreen
