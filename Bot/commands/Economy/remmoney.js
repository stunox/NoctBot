const {
  MessageEmbed
} = require('discord.js');
const {
  MESSAGES
} = require('../../../util/constants');

const functions = require('../../../util/functions');

module.exports.run = functions.run = async (client, message, args, settings, userInfo, strings) => {
  const checkMark = client.emojis.resolve(client.localEmojis.checkMark);
  const x_mark = client.emojis.resolve(client.localEmojis.x_mark);

  const language = settings.general.language;
  const support = args[0].toLowerCase() == 'bank' || (args[0]).toLowerCase() == 'cash' ? args.shift().toLowerCase() : 'cash';
  let user = args[0] ? (args[0].startsWith('<@') && args[0].endsWith('>') ? message.mentions.users.first() : (isNaN(args[0]) ? (args[0].includes('#') ? client.users.cache.find(m => m.tag.toLowerCase() == args[0].toLowerCase()) : (client.users.cache.find(m => (m.username.toLowerCase()) == args[0].toLowerCase()))) : client.users.resolve(args[0]))) : message.author;
  if (!user) user = message.author;

  const toRem = isNaN(args[0]) ? (isNaN(args[1]) ? parseInt(args[2]) : parseInt(args[1])) : parseInt(args[0]);
  if (isNaN(toRem)) return message.channel.send({
    embeds: [{
      description: `${x_mark}${language == 'fr' ? 'Utilisation de la commande' : 'Correct usage'} : \`${settings.general.prefix}remmoney ${module.exports.help.usage}\``
    }]
  })
  userInfo = user.id == message.author.id ? userInfo : await client.getGuildUser(message.guild, user);
  if (!userInfo) await client.createGuildUser(message.guild, user);
  const newB = support == 'bank' ? userInfo.moneyBank - toRem : userInfo.moneyCash - toRem;


  const msg = language == 'fr' ? `${checkMark}$${toRem} a été retiré de la \`${support}\` balance de ${user} ! ${user} a maintenant ${newB}!` : `${checkMark}Successfully removed ${toRem} from ${user}'s ${support} balance! Now ${user} have ${newB}!`;


  const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#000000')
    .setTitle(language == 'fr' ? 'Monnaie retiré' : 'Money removed')
    .setDescription(msg)
    .setFooter(message.guild, message.guild.iconURL())
    .setTimestamp();

  client.updateGuildUI(message.guild, user, {
    "users.$.moneyCash": support == 'bank' ? userInfo.moneyCash : newB,
    "users.$.moneyBank": support == 'bank' ? newB : userInfo.moneyBank,
  })
  message.channel.send({embeds: [embed]});
};


module.exports.underCat = MESSAGES.COMMANDS.ECONOMY.ADMIN;

module.exports.help = MESSAGES.COMMANDS.ECONOMY.ADMIN.REMMONEY;