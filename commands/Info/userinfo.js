const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

  const user = args[0] ? (args[0].startsWith('<@') && args[0].endsWith('>') ? message.mentions.users.first() : (isNaN(args[0]) ? (args[0].includes('#') ? client.users.cache.find(m => m.tag.toLowerCase() == args[0].toLowerCase()) : (message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0].toLowerCase()) == undefined ? client.users.cache.find(m => m.username.toLowerCase() == args[0].toLowerCase()) : message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0].toLowerCase()).user)) : client.users.cache.get(args[0]))) : message.author;
  const member = message.guild.member(user);

  if (!user || user === '\u200b') return message.channel.send('User not found!');

  if (user && user !== '\u200b') {
    const dbUser = await client.getUser(member);

    const embed = new MessageEmbed()
      .setColor("#000000")
      .setTitle(user.tag)
      .setThumbnail(user.avatarURL())
      .addField('ID :', `${user.id}`, true)
      .addField('\u200b', '\u200b')
      .setTimestamp()
      .setFooter("By ηLβ 94");

    if (member && member.roles.cache.size > 1) embed.addField('\u200b', '\u200b'), embed.addField('User Roles :', `${member.roles.cache.map(r => `<@&${r.id}>`).join(', ')}`)
    if (member && !member.premiumSince) embed.addField('\u200b', '\u200b'), embed.addField('Is Booster :', 'No'), embed.addField('\u200b', '\u200b')
    else if (member && member.premiumSince) {
      embed.addField('Booster Since :', `${moment(member.premiumSince).format('ddd, DD/MM/YYYY HH:mm')} (${(Math.round(Math.floor(Date.now() - member.premiumSince) / (1000 * 3600 * 24)))} days ago)`, true)
    };
    if (member) {
      embed.addField('Joined server at :', `${moment(member.joinedAt).format('ddd, DD/MM/YYYY HH:mm')} (${(Math.round(Math.floor(Date.now() - member.joinedAt) / (1000 * 3600 * 24)))} days ago)`, true)
    } else if (!member) {
      embed.setDescription('This user is not in this guild.')
    }
    embed.addField('Joined Discord At :', `${moment(user.createdAt).format('ddd, DD/MM/YYYY HH:mm')} (${(Math.round(Math.floor(Date.now() - user.createdAt) / (1000 * 3600 * 24)))} days ago)`, true);

    if (member) {
      if (dbUser && dbUser.warns > 0) embed.addField('Infractions :', `${dbUser.warns} warns`);
      if (member.hasPermission('BAN_MEMBERS', true)) embed.addField('Administrator :', 'Yes')
      else if (member.hasPermission('SEND_MESSAGES', false)) embed.addField('Administrator :', 'No');
    }
    message.channel.send(embed);
  };
};

module.exports.help = MESSAGES.COMMANDS.INFO.USERINFO;