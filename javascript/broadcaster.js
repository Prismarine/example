//required for the server, to recognize this as a plugin.
var plugin = {
  'name'        : 'test',
  'description' : 'broadcasts test',
  'api_version' : '1',
  'authors'     : ['Nick', 'Steve', 'Notch']
};

//json message, as being used in vanilla minecraft.
var message = {
  "text"  :"[Broadcast] Welcome to my awesome server, running prismarine",
  "color" :"gold",
  "bold"  :"true"
};

//this function is called when te plugin is being initialzied
function onEnable() {
  setInterval(function(){
    //this is an example of an API function.
    Server.broadcastJsonMessage(message);
  }, 60000);
}

function onDisable() {
  
}
