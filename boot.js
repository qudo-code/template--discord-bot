const path = require("path");
const fs = require("fs").promises;

// Subscribe to 
module.exports = async (client) => {

    // Build dictionary of all file names in the /commads directory.
    const files = await fs.readdir(path.join(__dirname, "commands"));

    console.log({files});

    // client.on("messageCreate", async (message) => {
    //     // Only react to messages sent by the user not our own replies.
    //     if(message.author.bot) {
    //         return false;
    //     }
        
        


    //     // if(message.content.startsWith("!market")) {
    //     //     const [ , symbol = "SOL" ] = message.content.split(" ");
    
    //     //     const response = await fetch(`${binanceAPI}/ticker/price?symbol=${symbol.toUpperCase()}USDT`);
    
    //     //     const { price } = await response.json();
    
    //     //     message.reply(`${symbol}: $${parseFloat(price)} USDT`);
    //     // }
    // });
}
