const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../../util/constants');

const functions = require('../../../util/functions');

module.exports.run = functions.run = async (client, message, args, settings, userInfo, strings) => {
  

  const checkMark = client.emojis.resolve(client.localEmojis.checkMark);
  const x_mark = client.emojis.resolve(client.localEmojis.x_mark);

  if (isNaN(args[0]) && !args[0].toLowerCase().startsWith('al')) return message.channel.send({embeds: [{ description: `${x_mark}Correct usage : \`${settings.general.prefix}deposit ${module.exports.help.usage}\``}]});


    const toWith = args[0].toLowerCase().startsWith('al') ? parseInt(userInfo.moneyBank) : parseInt(args[0]);

    if (toWith > userInfo.moneyBank) return message.channel.send({embeds: [{ description: `${x_mark}You have only ${userInfo.moneyBank} in your bank!`}]});
    
    const embed = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('#000000')
      .setTitle('Withdrew from bank')
      .setDescription(`${checkMark}Successfully withdrew ${toWith} from ${message.author}'s bank!`)
      .setFooter(message.guild, message.guild.iconURL())
      .setTimestamp();

      const newBank = userInfo.moneyBank - toWith;
      const newB = userInfo.moneyCash + toWith;

      client.updateGuildUI(message.guild, message.member, {
        "users.$.moneyCash": newB
      });
      client.updateGuildUI(message.guild, message.member, {
        "users.$.moneyBank": newBank
      });

    message.channel.send({embeds: [embed]});
};


module.exports.underCat = MESSAGES.COMMANDS.ECONOMY.MANAGE;

module.exports.help = MESSAGES.COMMANDS.ECONOMY.MANAGE.WITHDRAW;