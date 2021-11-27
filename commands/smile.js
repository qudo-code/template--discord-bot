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