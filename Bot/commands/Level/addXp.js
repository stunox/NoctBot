const {
  MESSAGES
} = require("../../../util/constants");

const functions = require('../../../util/functions');

module.exports.run = functions.run = async (client, message, args, settings, userInfo) => {  
  const language = settings.general.language;

  const x_mark = client.emojis.resolve(client.localEmojis.x_mark);
  const checkMark = client.emojis.resolve(client.localEmojis.checkMark);

  const user = message.guild.member(message.mentions.users.first()) || message.guild.member(message.author.id);
  const expToAdd = parseInt(args[0]);
  if (isNaN(expToAdd)) return message.channel.send({
    embed: {
      description: `${x_mark}${await client.translate('Correct usage', 'en', language)} : \`${settings.general.prefix}addxp <${await client.translate('number', 'en', language)}>\``
    }
  })
  const newExp = expToAdd + userInfo.XP
  client.updateGuildUI(message.guild, user, {
    "users.$.XP": newExp
  });
  message.channel.send({
    embed: {
      description: `${checkMark}<@${message.author.id}> ${await client.translate(`added ${expToAdd} XP to`, 'en', language)} ${user}`
    }
  })
};



module.exports.help = MESSAGES.COMMANDS.LEVEL.ADDXP;