const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../../util/constants");
const moment = require("moment");

const functions = require('../../../util/functions');

module.exports.run = functions.run = async (client, message, args, settings, userInfo, strings)  => {

  const x_mark = client.emojis.resolve(client.localEmojis.x_mark);
  const check_mark = client.emojis.resolve(client.localEmojis.checkMark)
  const user = args[0] ? (args[0].startsWith('<@') && args[0].endsWith('>') ? message.mentions.users.first() : (isNaN(args[0]) ? (args[0].includes('#') ? client.users.cache.find(m => m.tag.toLowerCase() == args[0].toLowerCase()) : (message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0].toLowerCase()) == undefined ? client.users.cache.find(m => m.username.toLowerCase() == args[0].toLowerCase()) : message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0].toLowerCase()).user)) : client.users.cache.get(args[0]))) : message.author;
  const member = message.guild.members.resolve(user);

  if (!user || user === '\u200b') return message.channel.send({embeds: [{description: `${x_mark}User not found!`}]});

  if (user && user !== '\u200b') {
    if (user !== message.author && user !== message.member) userInfo = await client.getGuildUser(message.guild, member)

    const customStat = user.presence.activities.length > 0 ? user.presence.activities.find(a => a.type == 'CUSTOM_STATUS') : '';

    const embed = new MessageEmbed()
      .setColor("#000000")
      .setTitle(user.tag)
      .setThumbnail(user.avatarURL())
      member == undefined ? '' : embed.addField('Nickname :', member.nickname == undefined ? 'None' : member.nickname);
      embed.addField('ID :', `${user.id}`, true)
      !customStat ? '' : embed.addField('Custom Status', `Name : ${customStat.name} \nDescription : ${customStat.emoji ? (customStat.emoji.name ? customStat.emoji.name : '') : ''}${customStat.state}`)
      .addField('\u200b', '\u200b')
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL());

    if (member && member.roles.cache.size > 1) embed.addField('\u200b', '\u200b'), embed.addField('User Roles :', `${member.roles.cache.map(r => `<@&${r.id}>`).join(', ')}`)
    if (member && !member.premiumSince) embed.addField('\u200b', '\u200b'), embed.addField('Is Booster :', 'No'), embed.addField('\u200b', '\u200b')
    else if (member && member.premiumSince) {
      embed.addField('Booster Since :', `${moment(member.premiumSince).format('ddd, DD/MM/YYYY HH:mm')} (${(Math.round(Math.floor(Date.now() - member.premiumSince) / (1000 * 3600 * 24)))} days ago)`, true)
    };
    if (member) {
      embed.addField('Joined server at :', `${moment(member.joinedAt).format('ddd, DD/MM/YYYY HH:mm')} (${(Math.round(Math.floor(Date.now() - member.joinedAt) / (1000 * 3600 * 24)))} days ago)`, true)
    } else if (!member) {
      embed.setDescription(embed.description + '\n' + `${x_mark} This user is not in this guild.`)
    }
    embed.addField('Joined Discord At :', `${moment(user.createdAt).format('ddd, DD/MM/YYYY HH:mm')} (${(Math.round(Math.floor(Date.now() - user.createdAt) / (1000 * 3600 * 24)))} days ago)`, true);

    if (member) {
      if (userInfo) embed.addField('Message Sent', `${userInfo.messageSent} message(s)`)
      if (userInfo && userInfo.warns > 0) embed.addField('Infractions :', `${userInfo.warns} warn(s)`);
      if (member.permissions.has('BAN_MEMBERS', true)) embed.addField('Administrator :', `${check_mark}`)
      else if (member.permissions.has('SEND_MESSAGES', false)) embed.addField('Administrator :', `${x_mark}`);
    }
    message.channel.send({embeds: [embed]});
  };
};
module.exports.underCat = MESSAGES.COMMANDS.INFO.GUILD;

module.exports.help = MESSAGES.COMMANDS.INFO.GUILD.USERINFO;