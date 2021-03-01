const {
  MESSAGES
} = require("../../util/constants");

const functions = require('../../util/functions');

module.exports.run = functions.run = (client, message, args) => {
  message.delete();
  let msg = args.join(" ").replace("@everyone", '').replace('@here', '');
  if (msg && msg !== '') {
    message.channel.send(msg);
  }
};



module.exports.help = MESSAGES.COMMANDS.OTHER.SAY;