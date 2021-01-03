const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      EVAL: {
        name: "eval",
        aliases: ["eval"],
        category: "admin",
        description: "Eval javascript code",
        ownerCmd: true,
        cooldown: 0.1,
        enable: true,
        usage: "<code>",
        botPerm: true,
        botPermName: 'MANAGE_MESSAGES',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      BACKUPLIST: {
        name: "backup-list",
        aliases: ["lbackup"],
        category: "admin",
        description: "Get all backups code in the console",
        ownerCmd: true,
        cooldown: 0.1,
        enable: true,
        usage: "",
        botPerm: true,
        botPermName: 'MANAGE_MESSAGES',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false
      },
      BACKUPDELETE: {
        name: "backup-delete",
        aliases: ["backup-delete"],
        category: "backup",
        description: "Delete a backup from the server",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: false
      },
    },
    BACKUP: {
      BACKUPCREATE: {
        name: "backup-create",
        aliases: ["backup-create"],
        category: "backup",
        description: "Create a backup from the server",
        ownerCmd: false,
        cooldown: 60,
        enable: false,
        usage: "",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: false
      },
      BACKUPINFO: {
        name: "backup-info",
        aliases: ["backup-info"],
        category: "backup",
        description: "Get a backup info",
        ownerCmd: false,
        cooldown: 60,
        enable: false,
        usage: "<backup_id>",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true
      },
      BACKUPLOAD: {
        name: "backup-load",
        aliases: ["backup-load"],
        category: "backup",
        description: "Load a backup in the server",
        ownerCmd: false,
        cooldown: 60,
        enable: false,
        usage: "<backup_id>",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: true,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true
      },
    },
    ECONOMY: {
      ADDMONEY: {
        name: "addmoney",
        aliases: ["add-money"],
        category: "economy",
        description: "Add money (cash or bank) to a member's balance.",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "[cash | bank] <member> (amount)",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      ADDMONEYROLE: {
        name: "add-money-role",
        aliases: ["addmoneyrole", "add-money-role"],
        category: "economy",
        description:
          "Add money (cash or bank) balance of every members with a specific role.",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "[cash | bank] <role> (amount)",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      DAILY: {
        name: "daily",
        aliases: ["daily"],
        category: "economy",
        description: "Claim daily rewards",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      DEPOSIT: {
        name: "deposit",
        aliases: ["dep"],
        category: "economy",
        description: "Deposit money from your hand(cash) to bank",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<amount | all>",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      GIVEMONEY: {
        name: "give-money",
        aliases: ["gmoney", "givemoney"],
        category: "economy",
        description:
          "Give specific amount of your hand money (cash) to an user",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "@user (amount | all)",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true
      },
      MONEY: {
        name: "money",
        aliases: ["bal", "balance"],
        category: "economy",
        description: "Show an user money balance",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "{optional : @user}",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      REMMONEY: {
        name: "rem-money",
        aliases: ["remmoney", "removemoney", "remove-money"],
        category: "economy",
        description: "Remove money (cash or bank) from a member's balance.",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "[cash | bank] <user> (amount)",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      REMMONEYROLE: {
        name: "rem-money-role",
        aliases: ["remmoney-role", "removemoney-role", "remove-money-role"],
        category: "economy",
        description:
          "Remove money (cash or bank) from all member's balance who have specific role.",
        ownerCmd: false,
        cooldown: 10,
        enable: false,
        usage: "[cash | bank] <role> (amount)",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      SHOP: {
        name: "shop",
        aliases: ["store"],
        category: "economy",
        description: "View the list of server items available to buy.",
        ownerCmd: false,
        cooldown: 1,
        enable: false,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      WITHDRAW: {
        name: "withdraw",
        aliases: ["with"],
        category: "economy",
        description: "Withdraw money from bank to your hand(cash)",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<amount | all>",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
    },
    GIVEAWAY: {
      GCREATE: {
        name: "gcreate",
        aliases: ['gcreate'],
        category: 'giveaway',
        description: "",
        ownerCmd: false,
        cooldown: 5,
        enable: false,
        usage: '<time> (winners) {prize} or <time> (winners) {prize} #channel',
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: true
      }
    },
    INFO: {
      BOTINFO: {
        name: "botinfo",
        aliases: ["bi", "botstats"],
        category: "info",
        description: "Bot stats",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      SERVERINFO: {
        name: "serverinfo",
        aliases: ["si", "serverstats"],
        category: "info",
        description: "Server stats",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      USERINFO: {
        name: "userinfo",
        aliases: ["ui", "userstats"],
        category: "info",
        description: "User Infos",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
    },
    LEVEL: {
      ADDXP: {
        name: "addxp",
        aliases: ["addxp"],
        category: "level",
        description: "Add an user xp",
        ownerCmd: false,
        cooldown: 100,
        enable: false,
        usage: "<xp_to_add> {optional: @user}",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      LEADERBOARD: {
        name: "leaderboard",
        aliases: ["lb", "lb-xp"],
        category: "level",
        description: "Show Server's XP Leaderboard",
        ownerCmd: false,
        cooldown: 2,
        enable: false,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      RANK: {
        name: "rank",
        aliases: ["level", "xp"],
        category: "level",
        description: "Show an user xp/rank",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "{optional: @user}",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      REMXP: {
        name: "removexp",
        aliases: ["remxp", "deletexp"],
        category: "level",
        description: "Remove an user xp",
        ownerCmd: false,
        cooldown: 100,
        enable: false,
        usage: "<xp_to_rem> {optional: @user}",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
    },
    MODERATION: {
      ADDROLE: {
        name: "addrole",
        aliases: ["add-role"],
        category: "moderation",
        description: "Add role to an user.",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "@role {optional : @user}",
        botPerm: true,
        botPermName: 'MANAGE_ROLES',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true
      },
      BAN: {
        name: "ban",
        aliases: ["ban"],
        category: "moderation",
        description: "Ban an user from the server.",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "@user {optional : reason}",
        botPerm: true,
        botPermName: 'BAN_MEMBERS',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "BAN_MEMBERS",
        onlyPremium: false,
        args: true,
      },
      CLEAR: {
        name: "clear",
        aliases: ["purge", "prune"],
        category: "moderation",
        description: "Clear messages in channel (or an user messages).",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "<nb> {@user}",
        botPerm: true,
        botPermName: 'MANAGE_MESSAGES',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: true,
      },
      KICK: {
        name: "kick",
        aliases: ["kick"],
        category: "moderation",
        description: "Kick an user from the server",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "@user {optional : reason}",
        botPerm: true,
        botPermName: 'KICK_MEMBERS',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "KICK_MEMBERS",
        onlyPremium: false,
        args: true,
      },
      LOCK: {
        name: "lock",
        aliases: ["lock-down"],
        category: "moderation",
        description: "Lock a channel for members without administrator permission.",
        ownerCmd: false,
        cooldown: 3,
        enable: false,
        usage: "",
        botPerm: true,
        botPermName: ['MANAGE_CHANNELS', 'MANAGE_ROLES'],
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_CHANNELS",
        onlyPremium: false,
        args: false
      },
      MUTE: {
        name: "mute",
        aliases: ["mute"],
        category: "moderation",
        description: "Mute an user in the server.",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "@user {time} <reason>",
        botPerm: true,
        botPermName: 'MANAGE_ROLES',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MUTE_MEMBERS",
        onlyPremium: false,
        args: true
      },
      NUKE: {
        name: "nuke",
        aliases: ["nuke"],
        category: "moderation",
        description: "Nuke the channel.",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "",
        botPerm: true,
        botPermName: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_CHANNELS",
        onlyPremium: false,
        args: false
      },
      TEMPBAN: {
        name: "tempban",
        aliases: ["temp-ban"],
        category: "moderation",
        description: "Ban an user from the server temporary.",
        ownerCmd: false,
        cooldown: 3,
        enable: false,
        usage: "@user {optional : time}",
        botPerm: true,
        botPermName: 'BAN_MEMBERS',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "BAN_MEMBERS",
        onlyPremium: false,
        args: true
      },
      UNBAN: {
        name: "unban",
        aliases: ["unban"],
        category: "moderation",
        description: "Unban a banned user from the server.",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "<user_id>",
        botPerm: true,
        botPermName: 'BAN_MEMBERS',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "BAN_MEMBERS",
        onlyPremium: false,
        args: true
      },
      UNLOCK: {
        name: "unlock",
        aliases: ["unlock-down"],
        category: "moderation",
        description: "Unlock a locked channel.",
        ownerCmd: false,
        cooldown: 3,
        enable: false,
        usage: "",
        botPerm: true,
        botPermName: ['MANAGE_CHANNELS', 'MANAGE_ROLES'],
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_CHANNELS",
        onlyPremium: false,
        args: false
      },
      UNMUTE: {
        name: "unmute",
        aliases: ["unmute"],
        category: "moderation",
        description: "Unmute a muted user in the server.",
        ownerCmd: false,
        cooldown: 3,
        enable: true,
        usage: "@user",
        botPerm: true,
        botPermName: 'MANAGE_ROLES',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MUTE_MEMBERS",
        onlyPremium: false,
        args: true
      },
    },
    OTHER: {
      ADDBOT: {
        name: "addbot",
        aliases: [
          "invite",
          "add-bot",
          "botinvite",
          "bot-invite",
          "invite-bot",
          "help"
        ],
        category: "other",
        description: "Add bot to your server",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false
      },

      HELP: {
        name: "help",
        aliases: ["aide"],
        category: "other",
        description: "All bot's commands",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "<command>",
        botPerm: true,
        botPermName: 'USE_EXTERNAL_EMOJIS',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false
      },
      PING: {
        name: "ping",
        aliases: ["ping"],
        category: "other",
        description: "Gets the ping of bot",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false
      },
      POLL: {
        name: "poll",
        aliases: ["poll"],
        category: "other",
        description: "Make a simple poll",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "<poll>",
        botPerm: true,
        botPermName: 'MANAGE_MESSAGES',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true
      },
      SAY: {
        name: "say",
        aliases: ["rep", "repeat"],
        category: "other",
        description: "Repeat a message",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "<message>",
        botPerm: true,
        botPermName: 'MANAGE_MESSAGES',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true
      },
    },
    SERVERSETTINGS: {
      CHANGE: {
        name: "config",
        aliases: ["change", "set", "setup", "bot-config", "config-bot", "server-settings", "settings"],
        category: "serversettings",
        description: "Config Bot Server's Settings",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: `<key> <value>`,
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_GUILD",
        onlyPremium: false,
        args: true
      },
      CUSTOMCMD:{
        name: "new-cmd",
        aliases: ["create-cmd"],
        category: "serversettings",
        description: "Create a new custom command for the server.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: false
      },
    },
  },
};

exports.MESSAGES = MESSAGES;
