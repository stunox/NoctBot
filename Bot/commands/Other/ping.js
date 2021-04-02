const { MESSAGES } = require("../../../util/constants");

const functions = require('../../../util/functions');

module.exports.run = functions.run = async (client, message, args) => {
const settings = await client.getGuild(message.guild);
  const msg = await message.channel.send("Pong!");
  await msg.edit(`Pong - ${client.ws.ping}ms`);
};



module.exports.help = MESSAGES.COMMANDS.OTHER.PING;