module.exports = (client) => {
    let currentWord = 0;

    const words = [
        "My",
        "Discord",
        "Bot",
    ];

    setInterval(() => {
        if(currentWord >= words.length) {
            currentWord = 0;
        }

        client.user.setActivity(words[currentWord], { type : "PLAYING" });

        currentWord += 1;
    }, 3000);
};