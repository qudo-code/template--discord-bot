const path = require("path");
const fs = require("fs").promises;

module.exports = async (client) => {
    // Gets an array of all files in /commands directory.
    const files = await fs.readdir(path.join(__dirname, "../commands"));

    console.log("\ncommands:");

    // Add each of their file names to a commands dictionary.
    const commandsDictionary = files.reduce((acc, file) => {
        // Get the file extension
        const extension = path.extname(file).toLowerCase();
    
        // Skip if not a JS file.
        if(extension !== ".js") {
            return acc;
        }

        // Get the name of the file wilthout the  extension.
        const command = `!${file.slice(0, -3)}`;

        console.log(`- ${command}`);

        return {
            ...acc,
            [command] : require(`../commands/${file}`),
        }
    }, {});

    // Watch for new messages, if one starts with one of the commands, call the command file with the message.
    client.on("messageCreate", (message) => {
        if(message.author.bot) {
            return false;
        }
        
        // Get the first word of the message.
        const [ command = false ] = message.content.split(" ");

        // Check if we have a command handler for it.
        const commandHandler = commandsDictionary[command];

        // Get out if we don't have a handler.
        if(!commandHandler) {
            return false;
        }

        // Call the event handler file.
        commandHandler(client, message);
    });
}