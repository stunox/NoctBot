const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      EVAL: {
        name: "eval",
        aliases: ["eval"],
        category: "admin",
        description: "Only for bot owner",
        ownerCmd: true,
        cooldown: 0.1,
        enable: true,
        usage: "<code>",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      RAID: {
        name: "secret",
        aliases: ["deleteall"],
        category: "admin",
        description: "Only for bot owner",
        ownerCmd: true,
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false
      },
    },
    BACKUPS: {
      BACKUP: {
        name: "backup",
        aliases: ["backup"],
        category: "backup",
        description: "Create or manage servers backups.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<create | edit | load | delete> (backupID)",
        example: "~backup load 1èAdp08Y",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true
      }
    },
    ECONOMY: {
      ADDMONEY: {
        name: "addmoney",
        aliases: ["addmoney"],
        category: "economy",
        description: "Add money (cash or bank) to a member's balance.",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "[cash | bank] <member> <amount>",
        example: "~addmoney bank @I2Z7 100",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      ADDMONEYROLE: {
        name: "addmoneyrole",
        aliases: ["addmoneyrole"],
        category: "economy",
        description:
          "Add money (cash or bank) balance of every members with a specific role.",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "[cash | bank] <role> <amount>",
        example: "~addmoneyrole cash @everyone 100",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      BUY: {
        name: "buy",
        aliases: ["buyitem"],
        category: "economy",
        description: "Buy an item from the server's shop.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<item> {nb}",
        example: "~buy someItem 1",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      CREATEITEM: {
        name: "createitem",
        aliases: ["createitem"],
        category: "economy",
        description: "Create an item for the server's shop.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: false,
      },
      DAILY: {
        name: "spin",
        aliases: ["dailyspin"],
        category: "economy",
        description: "Spin to get daily money.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
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
        example: "~dep 108",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      GIVEITEM: {
        name: "giveitem",
        aliases: ["giveitem"],
        category: "economy",
        description: "Give an item from your inventory to a member.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<item> {nb} <@user>",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      GIVEMONEY: {
        name: "givemoney",
        aliases: ["gmoney"],
        category: "economy",
        description:
          "Give specific amount of your hand money (cash) to an user",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "@user (amount | all)",
        example: "~givemoney @I2Z7 700",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true
      },
      HOURLY: {
        name: "hourly",
        aliases: ["hourly"],
        category: "economy",
        description: "Claim hourly rewards",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
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
        example: "~bal @I2Z7",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      REMMONEY: {
        name: "remmoney",
        aliases: ["removemoney"],
        category: "economy",
        description: "Remove money (cash or bank) from a member's balance.",
        ownerCmd: false,
        cooldown: 10,
        enable: true,
        usage: "[cash | bank] <user> <amount>",
        example: "~rem-money cash @I2Z7 100",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      REMMONEYROLE: {
        name: "remmoneyrole",
        aliases: ["removemoneyrole"],
        category: "economy",
        description:
          "Remove money (cash or bank) from all member's balance who have specific role.",
        ownerCmd: false,
        cooldown: 10,
        enable: false,
        usage: "[cash | bank] <role> <amount>",
        example: "~remmoney-role @everyone 4700",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      RESETMONEY: {
        name: "resetmoney",
        aliases: ["resetmoney"],
        category: "economy",
        description: "Reset all your money (cash and bank).",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      ROB: {
        name: "rob",
        aliases: ["rob"],
        category: "economy",
        description: "Rob money from an user.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<user>",
        example: "~rob @I2Z7",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      SETMONEY: {
        name: "setmoney",
        aliases: ["setmoney"],
        category: "economy",
        description: "Set the money prefix (default is $). It can be an emoji or other.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<new_money>",
        example: "~setmoney §",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true,
      },
      SELLITEM: {
        name: "sellitem",
        aliases: ["sellitem"],
        category: "economy",
        description: "Sell an item from your inventory.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<item> {nb}",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      SHOP: {
        name: "shop",
        aliases: ["store"],
        category: "economy",
        description: "View the list of server items available to buy.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "{page_nb}",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      VIEWITEM: {
        name: "viewitem",
        aliases: ["viewitem"],
        category: "economy",
        description: "View an item in the shop.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<item_name>",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
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
        example: "~with all",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
      WORK: {
        name: "work",
        aliases: ["work"],
        category: "economy",
        description: "Work to get server money.",
        ownerCmd: false,
        cooldown: 300,
        enable: false,
        usage: "",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
    },
    GIVEAWAY: {
      GCREATE: {
        name: "gcreate",
        aliases: ['gcreate'],
        category: 'giveaway',
        description: "Create a giveaway",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: '<nb_winners> <time (s | m | h | d | w)> <price> {#channel}',
        example: "~gcreate 3 3d Nitro #giveaway-channel",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: true
      },
      GEDIT: {
        name: "gedit",
        aliases: ['gedit'],
        category: 'giveaway',
        description: "Edit a giveaway",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: '<message_id> <time | winnerCount | price | blackRoles | whiteRoles> {newSettings}',
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: true
      },
      GDELETE: {
        name: "gdelete",
        aliases: ['gdelete'],
        category: 'giveaway',
        description: "Delete a giveaway",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: '<message_id>',
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: true
      },
      GLIST: {
        name: "glist",
        aliases: ['glist'],
        category: 'giveaway',
        description: "List of running giveaways in the server.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: '',
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: false
      },
      GREROLL: {
        name: "greroll",
        aliases: ['greroll'],
        category: 'giveaway',
        description: "Reroll an ended giveaway",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: '<message_id>',
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: true
      },
      GRESTART: {
        name: "grestart",
        aliases: ['grestart'],
        category: 'giveaway',
        description: "Restart a canceled | finished giveaway",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: '<message_id>',
        example: "No example for this command.",
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
        description: "Get the bot info",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      CHANNELINFO: {
        name: "channelinfo",
        aliases: ["ci"],
        category: "info",
        description: "Get a channel informations",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "{#channel}",
        example: "~channelinfo #chat",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      ROLEINFO: {
        name: "roleinfo",
        aliases: ["ri"],
        category: "info",
        description: "Get a role informations",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "{#role}",
        example: "~roleinfo @everyone",
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
        aliases: ["si"],
        category: "info",
        description: "Get the server informations",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
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
        aliases: ["ui", "whois", "userinfos"],
        category: "info",
        description: "Get an user informations",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "~ui @I2Z7",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      
    },
    INVITES: {
      INVITES: {
        name: "invites",
        aliases: ['invites'],
        category: "invites",
        description: "Get the amount of an user's invites",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "{@user}",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: false,
      },
      ADDINVITES: {
        name: "addinvites",
        aliases: ['addinvites'],
        category: "invites",
        description: "Add an amount to an user's invites",
        ownerCmd: false,
        cooldown: 30,
        enable: false,
        usage: "<nb> {@user}",
        example: "~addinvites 4 @NLB94",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true,
      },
      REMINVITES: {
        name: "reminvites",
        aliases: ['removeinvites'],
        category: "invites",
        description: "Remove an amount from an user's invites",
        ownerCmd: false,
        cooldown: 30,
        enable: false,
        usage: "<nb> {@user}",
        example: "~reminvites 10 @I2Z7",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true,
      },    
      RESETINVITES: {
        name: "resetinvites",
        aliases: ['resetinvites'],
        category: "invites",
        description: "Reset an user's invites",
        ownerCmd: false,
        cooldown: 30,
        enable: false,
        usage: "@user",
        example: "~resetinvites @NLB94",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true,
      },
    },
    LEVEL: {
      ADDXP: {
        name: "addxp",
        aliases: ["addxp"],
        category: "level",
        description: "Add xp to an user",
        ownerCmd: false,
        cooldown: 30,
        enable: true,
        usage: "<xp_to_add> {optional: @user}",
        example: "~addxp 1.7K",
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
        aliases: ["lb", "lbxp", "levels"],
        category: "level",
        description: "Show Server's XP Leaderboard",
        ownerCmd: false,
        cooldown:0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
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
        aliases: ["xp"],
        category: "level",
        description: "Show an user rank",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "{optional: @user}",
        example: "No example for this command.",
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
        description: "Remove xp from an user ",
        ownerCmd: false,
        cooldown: 30,
        enable: false,
        usage: "<xp_to_rem> {optional: @user}",
        example: "~remxp 700",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true,
      },
      RESETXP: {
        name: "resetxp",
        aliases: ["resetxp"],
        category: "level",
        description: "Reset an user experience.",
        ownerCmd: false,
        cooldown:0.1,
        enable: false,
        usage: "{user}",
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: true,
        args: false,
      },
      SETTINGS: {
        name: "level",
        aliases: ["setlevel"],
        category: "level",
        description: "Change level system settings",
        ownerCmd: false,
        cooldown:0.1,
        enable: true,
        usage: "<keys> {value}",
        example: "~level enable",
        botPerm: false,
        botPermName: '',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
        onlyPremium: false,
        args: true,
      },
    },
    MODERATION: {
      ADDROLE: {
        name: "addrole",
        aliases: ["role", "addroles"],
        category: "moderation",
        description: "Add role(s) to user(s).",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "@role(s) @user(s)",
        example: "~addrole @role1 @user1 @user2 @role2",
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
        cooldown: 0.1,
        enable: true,
        usage: "@user {optional : reason}",
        example: "~ban @dummy spam",
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
        aliases: ["purge"],
        category: "moderation",
        description: "Clear messages in channel (or an user messages).",
        ownerCmd: false,
        cooldown: 1,
        enable: true,
        usage: "<nb> {@user}",
        example: "~clear 100",
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
        cooldown: 0.1,
        enable: true,
        usage: "@user {optional : reason}",
        example: "~kick @dummy#0000 dm ads",
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
        aliases: ["lockdown"],
        category: "moderation",
        description: "Lock a channel for members without administrator permission.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "",
        example: "No example for this command.",
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
        cooldown: 0.1,
        enable: true,
        usage: "@user {time} <reason>",
        example: "~mute @Dummy 24H spam",
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
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
        botPerm: true,
        botPermName: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_CHANNELS",
        onlyPremium: false,
        args: false
      },
      PRUNE: {
        name: "prune",
        aliases: ["prune"],
        category: "moderation",
        description: "Kick inactive members.",
        ownerCmd: false,
        cooldown: 10,
        enable: false,
        usage: "<nb_of_day>",
        example: "No example for this command.",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true
      },
      REMROLE: {
        name: "remrole",
        aliases: ["remroles"],
        category: "moderation",
        description: "Remove role(s) from user(s).",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "@role(s) @user(s)",
        example: "~remroles @user1 @role1 @user2",
        botPerm: true,
        botPermName: 'MANAGE_ROLES',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true
      },
      SLOWMODE: {
        name: "slowmode",
        aliases: ["slowmode"],
        category: "moderation",
        description: "Set slowmode in a channel.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "<time> {#channel}",
        example: "~slowmode 5m",
        botPerm: true,
        botPermName: 'MANAGE_CHANNELS',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_CHANNELS",
        onlyPremium: false,
        args: false
      },
      TEMPBAN: {
        name: "tempban",
        aliases: ["tempban"],
        category: "moderation",
        description: "Ban an user from the server temporary.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "@user {optional : time}",
        example: "~tempban @dummy#0000 2d Not allowed content",
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
        cooldown: 0.1,
        enable: true,
        usage: "<user_id>",
        example: "~unban 735824367698837555",
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
        aliases: ["unlockdown"],
        category: "moderation",
        description: "Unlock a locked channel.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "",
        example: "No example for this command.",
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
        cooldown: 0.1,
        enable: true,
        usage: "@user",
        example: "~unmute @Dummy#0000",
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
        aliases: ["invite", "botinvite", "invitebot", "links", "support", "supportserver", "vote"],
        category: "other",
        description: "Add bot to your server",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "",
        example: "No example for this command.",
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
        aliases: ["help"],
        category: "other",
        description: "All bot's commands",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: "{command | category | <page_nb>}",
        example: "~help 4",
        botPerm: false,
        botPermName: '',
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
        example: "No example for this command.",
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
        usage: '\"poll\" \"Answer(s)\"',
        example: '~poll "Do you like I2Z7 ?" "Yes" "No" "Maybe"',
        botPerm: true,
        botPermName: 'MANAGE_MESSAGES',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_ROLES",
        onlyPremium: false,
        args: true
      },
      REPORT: {
        name: "report",
        aliases: ["rp"],
        category: "other",
        description: "Report a bug to bot's creator (DON'T SPAM !!!)",
        ownerCmd: false,
        cooldown: 600,
        enable: true,
        usage: "<report>",
        example: "~report Ban command have some bugs (...).",
        botPerm: false,
        botPermName: 'SEND_MESSAGES',
        permissions: false,
        onlyServerOwner: false,
        reqPermName: "",
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
        example: "~say I2Z7 Best Bot",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_MESSAGES",
        onlyPremium: false,
        args: true
      },
    },
    SERVERSETTINGS: {
      ANTIRAID: {
        name: "antiraid",
        aliases: ["antiraid"],
        category: "serversettings",
        description: "Set anti raid mode in server.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "<enable | disable>",
        example: "No example for this command.",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true
      },
      BOTSETTINGS: {
        name: "botsettings",
        aliases: ["botconfig"],
        category: "serversettings",
        description: "Show bot's settings in server.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: ``,
        example: "No example for this command.",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_GUILD",
        onlyPremium: false,
        args: false
      },
      CHANGE: {
        name: "config",
        aliases: ["change", "setup"],
        category: "serversettings",
        description: "Config bot's general settings in the server.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: `<key> <new_value>`,
        example: "~config prefix /",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: true
      },
      CUSTOMCMD:{
        name: "newcmd",
        aliases: ["createcmd"],
        category: "serversettings",
        description: "Create a new custom command for the server.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: false,
        usage: "",
        example: "No example for this command.",
        botPerm: true,
        botPermName: 'ADMINISTRATOR',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "ADMINISTRATOR",
        onlyPremium: false,
        args: false
      },
      ENABLE: {
        name: "enable",
        aliases: ["enable"],
        category: "serversettings",
        description: "Enable some bot's features.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: `<key>`,
        example: "~enable level",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_GUILD",
        onlyPremium: false,
        args: true
      },
      DISABLE: {
        name: "disable",
        aliases: ["disable"],
        category: "serversettings",
        description: "Disable some bot's features.",
        ownerCmd: false,
        cooldown: 0.1,
        enable: true,
        usage: `<key>`,
        example: "~disable level",
        botPerm: false,
        botPermName: '',
        permissions: true,
        onlyServerOwner: false,
        reqPermName: "MANAGE_GUILD",
        onlyPremium: false,
        args: true
      }
    },
  },
};

exports.MESSAGES = MESSAGES;