const generateCommands = require("./util/generate-commands.js");
const startServices = require("./util/start-services.js");

// Actions to perform upon app ready
module.exports = (client) => {
    console.log("Discord bot starting up...");

    generateCommands(client);
    startServices(client);
}
