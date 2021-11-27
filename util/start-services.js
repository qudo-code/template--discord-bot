const path = require("path");
const fs = require("fs").promises;

module.exports = async (client) => {
    const files = await fs.readdir(path.join(__dirname, "../services"));

    console.log("services:");

    files.forEach((file) => {
        const servicePath = path.join(__dirname, `../services/${file}`);
        const serviceFunction = require(servicePath);

        console.log(`- ${file}`);
        
        serviceFunction(client);
    });
}