# 🤖 Discord Bot
Here is a super barebones Discord Bot template. 

💡 This template aims to be a learning experience for those looking to learn about Discord Bot development as well as a great launchpad for anyone spinning up a project. Included are a few example files and suggested code patterns I have found to be useful.


Once you get the hang of things, checkout [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) to expand your knowldge regarding communicating with Discord.

## Setup Development Discord Server
I recommend that you make a new Discrod server to use as a staging/development environment for your bot.

## Create Discord Application 
This is where we define what our bot will look like and what it's called.

[Discord Application Page](https://discord.com/developers/applications/)

1. Go to the Application Page and create a new application.
2. Navigate to the bot tab within your application and make a new bot as well.
3. Create a `.env` in the root of your project and add your bots token like below. 

```bash
# Can be found under the bot tab.
DISCORD_BOT_TOKEN="bot token"
```

🎉 That's it! Now you have a Discord bot and a place to invite it to.

## Add Bot To Discord Server

`https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=8&scope=bot%20applications.commands`

Here's the template for Discord bot invite links. Just replace `CLIENT_ID` with the one located under the applications Discord Developer OAuth tab.

***Note:** To reduce initial friction to get something up and running, by default the bot requests full admin permissions, see `permissions=8` in the URL. If you want to set custom permissions, Discord has a UI for generating permissions integers at the bottom of the Discrod Developer Bot tab.*

## Project Structure
### 📁 `commands`
Files in this directory will be automatically turned into `!` commands like `!dosomething`. Each command file should export a function which can optionally recieve the client and message objects. 

#### Example
This example is included in the project by default. Try it by running `!smile` in a channel the bot has access to.
**File:** `./commands/smile.js`
**Usage in Discord:** `!smile`
```javascript
module.exports = (client, message) => {
    const smileys = [
        "😀",
        "😜",
        "🤪",
        "😁",
        "😅",
    ];

    // Pick random smiley
    const smile = smileys[Math.floor(Math.random()*smileys.length)];

    // Reply back with a random smiley
    message.reply(smile);
}
```

### 📁 `services`
Fire and forget functions to be kicked off at boot.

#### Example
A service that updates the Discords status message every second with a new word. Included in template.

```javascript
module.exports = () => {
    let currentWord = 0;

    const words = [
        "My",
        "Discord",
        "Bot",
    ];

    setInterval(() => {
        if(currentWord >= words - 1) {
            currentWord = 0;
        }

        client.user.setActivity(words[currentWord], { type : "WATCHING" });

        currentWord += 1;
    }, 1000)
}
```

### 👢 `boot.js`
Called upon trigger of the clients "ready" event (see in `index.js`). Kicks off all functions in `/services`  and handles creating Discord `!` commands out of all the files in `/commands`.

## 🏃‍♂️ Run
*If running locally, use `npm run dev` to start the bot with your provided `DISCORD_BOT_TOKEN`.*

📦 **`npm install`** First time install.

🛠 **`npm run dev`**: Set environment variables from `.env`, start bot, refresh bot upon file changes.

🌐 **`npm start`**: Start and run bot in current environment until stopped.

 Once running, the bot should appear as online in channels that it has access to.

## 🚀 Deploy
*An opinionated blurb of how I personally handle deployments.*
When you're ready to release your bot into the real world, local servers just ain't gonna cut it. This app will need to be deployed somewhere that it can run continously to keep the bot online. Personally I like to use Google Cloud Platform and their service called Cloud Run.

### 🐳 Dockerfile
I setup a simple Dockerfile in this repo so you can just point GCP or something like it to this project and it's all ready to deploy. If you have Docker installed, you can build it and start it with the following.
1. `docker build -t discord-bot`
2. `docker run discord-bot`

🚩 **pebblehost.com**
There's this service that comes up first in Google called Pebble Host and it was an absolute headache to use. They only give you an FTP server making CI/CD a pain to setup and you have to build your `package.json` with their weird UI making dependency tracking pretty terrible. You can do better. GCP would probably even be free for this project.

<hr />

#### 👀 [Templates]()
I like to write templates and architect things. If you liked this one, check out more.

#### 💡 [Tutorials]()
I make them when I have can. 

#### 📝 [My Configs](https://github.com/qudo-lucas/project-boilerplate--config-only)
Config files I use across projects such as ESlist, Stylelint, Babel config and VSCode settings.

#### 💬 Socials
Always down to chat if you need help.

**Discord:** `qudo#0288`

**Twitter:** [@qudolucas](https://twitter.com/qudolucas)
