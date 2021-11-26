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