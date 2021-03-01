const {
  Collection,
  MessageEmbed,
  Message
} = require("discord.js");
const ownerID = "616547009750499358";

module.exports = async (client, message) => {
  if (!message.member || !message.author) return;

  if (message.channel.type === "dm") {
    if (message.content.startsWith("~help")) {
      client.commands.get("help").run(client, message, message.content.slice(1).split(/ +/))
    } else client.emit("directMessage", (message));
  }
  if (message.author.bot) return;
  const x_mark = client.emojis.resolve('806440609127596032');
  const check_mark = client.emojis.resolve('770980790242377739');
  const arrowRight = client.emojis.resolve('770976808899444776');


  const settings = await client.getGuild(message.guild);
  const position = await settings.users.map((e) => e.id).indexOf(message.author.id);
  const userInfo = await settings.users[position];

  if (message.guild && position === -1) await client.createGuildUser(message.guild, message.member);

  if (!message.content.startsWith(settings.general.prefix) && userInfo !== undefined) {
    if (message.content.startsWith('~') && settings.general.prefix !== '~') await message.channel.send({
      embed: {
        description: `${arrowRight}My prefix in this server is \`${settings.general.prefix}\``
      }
    });
    if (message.content.startsWith("<@") || message.content.includes('<@')) {
      if (message.content.includes("<@!735824367698837555>") || message.content.includes("<@735824367698837555>")) message.channel.send({
        embed: {
          description: `${arrowRight}My prefix in this server is \`${settings.general.prefix}\``
        }
      });
    }
    if (settings.levelSystem.enable) {
      const expCd = Math.floor(Math.random() * 19) + 1;
      const expAdd = Math.floor(Math.random() * 25) + (10 * settings.levelSystem.boost);

      if (expCd >= 8 && expCd <= 12) {
        const newXP = userInfo.XP + expAdd;
        await client.updateGuildUI(message.guild, message.member, {
          "users.$.XP": newXP
        })
      };
      const oldLvl = userInfo.level;
      const xp = userInfo.XP;
      const xpreq = userInfo.XPRequire;

      if (xp < xpreq) return;
      else if (xp >= xpreq) {
        client.levelUp(message.guild, message.member, userInfo)

        let typeMsg = settings.levelSystem.message.embed.enable ? MessageEmbed : Message;
        let msg = typeMsg = MessageEmbed ? settings.levelSystem.message.normalMsg.msg : settings.levelSystem.message.embed.data;
        if (typeMsg = Message && msg == '') msg = 'GG {user}, you reached level **{level}**!';
        if (typeMsg = Message) msg = client.replaceLevelText(msg, message, { newLvl: (oldLvl + 1) })
        // else if (typeMsg = MessageEmbed) msg = client.replaceLevelEmbed(msg, message, { newLvl: (oldLvl + 1) })

        let channel = settings.levelSystem.channel;
        if (channel == '') channel = message.channel;
        channel.send(`${msg}`);

        if (settings.levelSystem.DM.enable) {
          let msgDm = settings.levelSystem.DM.message
          if (msgDm == '') msgDm = msg;
          message.author.send(`${msgDm}`);
        }
      };
    };
  };
  if (message.content.startsWith(settings.general.prefix)) {
    const args = message.content.slice(settings.general.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase().split("-").join("");

    let command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

    let pos = settings.customCommands.map(e => e.help.name).indexOf(commandName),
      customCommand = settings.customCommands[pos];
    if (!command && customCommand) command = customCommand;
    if (!command) return;

    const I2Z7Commu = client.guilds.resolve('727494941911154688')
    if (!command.help.enable && (!I2Z7Commu.member(message.author) || !I2Z7Commu.member(message.author).roles.cache.has('802959353921536021'))) return message.channel.send({
      embed: {
        description: `${x_mark}This command is on devlopment. Please wait...`
      }
    });

    if (command.help.ownerCmd && message.author.id !== ownerID) return;

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

    if (command.help.permissions && !message.member.hasPermission(command.help.reqPermName)) return message.reply({
      embed: {
        title: `Missing Permissions`,
        description: `${x_mark} You don't have enough permissions to use \`${command.help.name}\` command! \nNeeded permissions : \`${command.help.reqPermName}\``
      }
    });

    if (command.help.botPerm && !message.guild.me.hasPermission(command.help.botPermName)) return message.channel.send({
      embed: {
        title: `Missing Bot Permissions`,
        description: `${x_mark} I don't have enough permissions to run this command ! Give me \`${command.help.botPermName}\` permission(s)`
      }
    })

    if (command.help.args && !args.length) {
      let noArgsReply = `${arrowRight}${message.author} Correct usage :`;

      if (command.help.usage)
        noArgsReply += `\`${settings.general.prefix}${command.help.name} ${command.help.usage}\``;
      if (command.help.name === `config` || command.help.name == 'level' || command.help.name == 'captcha' || command.help.name == 'ticket' || command.help.name == 'welcome' || command.help.name == 'leave')
        noArgsReply += `\nIf you want to show all available keys, type \`${settings.general.prefix}${command.help.name} keys\``;

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

    if ((command.help.args && args.length || !command.help.args) && (command.help.permissions && message.member.hasPermission(command.help.reqPermName) || !command.help.permissions) && !command.help.ownerCmd && (command.help.name == 'report' && args.join(` `).length >= 25 || command.help.name !== 'report')) {
      if (!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection());
      }

      const timeNow = Date.now();
      const tStamps = client.cooldowns.get(command.help.name);
      const cdAmount = (command.help.cooldown || 0) * 1000;

      if (tStamps.has(message.author.id)) {
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

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

      tStamps.set(message.author.id, timeNow);
      setTimeout(() => tStamps.delete(message.author.id), cdAmount);
    }
    command.run(client, message, args, userInfo, settings);
  };
};