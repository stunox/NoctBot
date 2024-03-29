const {
    readdirSync
} = require("fs");
const functions = require('./loader');
// const chalk = require('chalk');

const loadCommands = functions.loadCommands = (client, dir = "./Bot/commands/") => {
    console.log(`${/*chalk.red(*/'Commandes chargées'/*)*/} :`);
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        console.log(dirs)
        for (const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            if (!getFileName.help) console.log(file);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`${/*chalk.blue(*/getFileName.help.name/*)*/}`);
        };
    });
};

const loadEvents = functions.loadEvents = (client, dir = "./Bot/events/") => {
    console.log(`${/*chalk.red(*/'Evènement chargés'/*)*/} : `)
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        console.log(dirs)
        for (const event of events) {
            const evt = require(`../${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            client.on(evtName, evt.bind(null, client));
            console.log(`${/*chalk.blue(*/evtName/*)*/}`);
        };
    });
};
const loadBots = functions.loadBots = async () => {
    require('../Bots/NoctAways/index');
    require('../Bots/NoctProtect/index');
    require('../Bots/NoctUtil');
    require('../Bots/NoctTicket');
};

module.exports = {
    loadCommands,
    loadEvents,
    loadBots
}