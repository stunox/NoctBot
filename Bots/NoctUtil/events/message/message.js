const {
  Collection,
  Client,
  Message,
  Channel,
} = require("discord.js");
const func = require("../../util/functions");
const ownerID = "616547009750499358";
const defaultPrefix = 'u~';
const {
  CountChannels
} = require('../../util/functions')

/**
 * @param {Client} client 
 * @param {Message} message 
 */
module.exports = async (client, message) => {
  const settings = await client.getGuild(message.guild);
  if (message.type == 'DEFAULT') {
    if (!message.author) return;

    let args = message.content.slice(defaultPrefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase().split("-").join("");

    if (message.channel.type == 'dm') {
      if (message.content.toLowerCase().startsWith("u~help")) {
        return client.commands.get("help").run(client, message, args);
      } else return client.emit("dm", (client, message));
    }

    if (message.author.bot) return;
    const x_mark = client.emojis.resolve('806440609127596032');
    const check_mark = client.emojis.resolve('770980790242377739');
    const arrowRight = client.emojis.resolve('770976808899444776');


    if (!settings || settings == undefined) await client.createGuild({
      guildID: message.guild.id
    })

    const position = await settings.users.map((e) => e.id).indexOf(message.author.id);
    const userInfo = await settings.users[position];

    if (message.guild && position === -1) await client.createGuildUser(message.guild, message.member);

    if (message.content.includes("discord.gg") || message.content.includes("discord.com/invite")) await client.emit('automod', ({
      client,
      message,
      args,
      type: 'invite',
      settings,
      userInfo
    }));
    if (message.content.includes("https://") || message.content.includes("http://")) await client.emit('automod', ({
      client,
      message,
      args,
      type: 'link',
      settings,
      userInfo
    }));

    if (!message.content.startsWith(settings.general.utilPrefix) && userInfo !== undefined) return client.notStartByPrefix(message, settings, userInfo);
    if (message.content.startsWith(settings.general.utilPrefix)) {

      let command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

      let pos = settings.customCommands.map(e => e.help.name).indexOf(commandName),
        customCommand = settings.customCommands[pos];
      if (!command && customCommand) command = customCommand;
      if (!command) return;

      if (message.author.id !== ownerID) {
        const NoctCommu = await client.guilds.resolve('727494941911154688');
        if (!command.help.enable && (!NoctCommu.members.resolve(message.author) || !NoctCommu.members.resolve(message.author).roles.cache.has('802959353921536021'))) return message.channel.send({
          embed: {
            description: `${x_mark}This command is on devlopment. Please wait...`
          }
        });

        if (command.help.onlyPremium && !settings.general.premium) return message.channel.send({
          embed: {
            description: `${x_mark}Only for premium server ! Upgrade to premium if you want more features !`
          }
        });

        if (command.help.onlyServerOwner && message.author.id !== message.guild.ownerID) return message.channel.send({
          embed: {
            title: `Missing Permissions`,
            description: `${x_mark} This command require \`Server Owner\` Permissions!`
          }
        });
      }
      if (command.help.permissions && !message.member.permissions.has(command.help.reqPermName)) return message.reply({
        embed: {
          title: `Missing Permissions`,
          description: `${x_mark} You don't have enough permissions to use \`${command.help.name}\` command! \nNeeded permissions : \`${command.help.reqPermName}\``
        }
      });

      if (command.help.botPerm && !message.guild.me.permissions.has(command.help.botPermName)) return message.channel.send({
        embed: {
          title: `Missing Bot Permissions`,
          description: `${x_mark} I don't have enough permissions to run this command ! Give me \`${command.help.botPermName}\` permission(s)`
        }
      })

      if (command.help.args && !args.length) {
        let noArgsReply = `${arrowRight}${message.author} Correct usage :`;

        if (command.help.usage)
          noArgsReply += `\`${settings.general.utilPrefix}${command.help.name} ${command.help.usage}\``;
        if (command.help.name === `config` || command.help.name == 'level' || command.help.name == 'captcha' || command.help.name == 'ticket' || command.help.name == 'welcome' || command.help.name == 'leave')
          noArgsReply += `\nIf you want to show all available keys, type \`${settings.general.utilPrefix}${command.help.name} keys\``;

        return message.channel.send({
          embed: {
            title: `Missing Arguments`,
            description: noArgsReply
          }
        });
      }
      if (command.help.name == 'report' && args.join(` `).length < 25) return message.channel.send({
        embed: {
          title: 'Invalid Report',
          description: 'Report must be 25 characters or more! \nNo Duplicated Message, if you want to report a little thing, join [support server](https://discord.gg/unRX2SUcvw) and report the bug in the correct channel !'
        }
      })

      if ((command.help.args && args.length || !command.help.args) && (command.help.permissions && message.member.permissions.has(command.help.reqPermName) || !command.help.permissions) && !command.help.ownerCmd && (command.help.name == 'report' && args.join(` `).length >= 25 || command.help.name !== 'report')) {
        if (!client.cooldowns.has(command.help.name)) {
          client.cooldowns.set(command.help.name, new Collection());
        }

        const timeNow = Date.now();
        const tStamps = client.cooldowns.get(command.help.name);
        const cdAmount = (command.help.cooldown || 0) * 1000;
        const userCd = tStamps.get(`${message.author.id} ${message.guild.id}`)

        if (userCd) {
          const cdExpirationTime = userCd.time + cdAmount;

          if (timeNow < cdExpirationTime) {
            timeLeft = (cdExpirationTime - timeNow) / 1000;

            return message.reply({
              embed: {
                title: 'Command Cooldown',
                description: `${x_mark}You have to wait ${Math.round(timeLeft)} second(s) to retry \`${command.help.name}\` command!`
              }
            });
          }
        }
        tStamps.set(message.author.id + ' ' + message.guild.id, {
          id: message.author.id,
          guildID: message.guild.id,
          time: timeNow
        });
        setTimeout(async () => {
          tStamps.delete(`${message.author.id} ${message.guild.id}`)
        }, cdAmount);
      }
      command.run(client, message, args, settings, userInfo);
    };
  } else {
    if (message.type == undefined) return;
    if (message.type.startsWith('USER_PREMIUM_GUILD_SUBSCRIPTION')) {
      if (!settings) await client.createGuild(message.guild);
      const count = settings.countChannels;
      if (!count.enable) return;

      const channels = count.list.filter(c => c.category.toLowerCase() == 'boosts');
      if (!channels || !channels.length || channels == undefined || channels.length < 1) return;

      if (message.type == 'USER_PREMIUM_GUILD_SUBSCRIPTION') {
        channels.forEach(
          /**
           * 
           * @param {CountChannels} c 
           */
          async (c) => {
            if (c.type == 'boosts') {
              const chnl = await message.guild.channels.resolve(c.id);
              if (chnl) await chnl.setName(chnl.name.slice(0, (chnl.name.length - (message.guild.premiumSubscriptionCount - 1).toString().length)) + message.guild.premiumSubscriptionCount)
            }
          })
      } else {
        channels.forEach(
          /**
           * 
           * @param {CountChannels} c 
           */
          async (c) => {
            if (c.type == 'boosts') {
              const chnl = await message.guild.channels.resolve(c.id);
              if (chnl) await chnl.setName(chnl.name.slice(0, (chnl.name.length - (message.guild.premiumSubscriptionCount - 1).toString().length)) + message.guild.premiumSubscriptionCount)
            } else if (c.type == 'level') {
              const chnl = await message.guild.channels.resolve(c.id);
              if (chnl) await chnl.setName(chnl.name.slice(0, (chnl.name.length - 1).toString().length) + message.guild.premiumTier)
            }
          })
      }
    }
  }
};