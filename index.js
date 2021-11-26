// Require the necessary discord.js classes
const { Client } = require("discord.js");

// Do this when app is ready
const boot = require("./boot.js");

const {
    DISCORD_BOT_TOKEN = false,
} = process.env;

if(!DISCORD_BOT_TOKEN) {
    console.error("🚨 Couldn't find environment variable DISCORD_BOT_TOKEN");
}

// Create a new client instance
const client = new Client({ intents : [ "GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES" ] });

// Kick off services, start message listener
client.on("ready", () => boot(client));

// Login to Discord with your client's token
client.login(DISCORD_BOT_TOKEN);
