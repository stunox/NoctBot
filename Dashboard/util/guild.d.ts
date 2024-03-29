import Discord from 'discord.js';
import { GuildData, GuildUserData } from "./functions";
  
  /**
   * Create a new guild in the database
   * @param {None}
   * @param {Object} guildID
   */
  export declare function createGuild(options: Object);
  
  /**
   * Get a guild in the database
   * @returns {Object}
   * @param guild
   */
  export declare function getGuild(guild: Discord.Guild): GuildData;
  
  /**
   * Update a specific guild data
   * @param guild
   * @param settings
   */
  export declare function updateGuild(guild: Discord.Guild, settings: Object);
  /**
   * Get all users of the guild in the database
   * @returns {Array}
   * @param guild
   */
  export declare function getGuildUsers(guild: Discord.Guild): GuildUserData[];
  /**
     * Create an user in the database
     * @param guild 
     * @param user 
     */
    export declare function createGuildUser(guild: Discord.Guild, user: Discord.GuildMember);
  
    /**
     * Get a specific user in the guild from the database
     * @param guild 
     * @param user 
     * @returns {Object}
     */
    export declare function getGuildUser(guild: Discord.Guild, user: Discord.GuildMember): GuildUserData;
    /**
     * Update an user's info in the database
     * @param guild 
     * @param member 
     * @param options 
     */
    export declare function updateGuildUI(guild: Discord.Guild, member: Discord.GuildMember, options: Object);
    /**
     * Reset all guilds from the database
     */
    export declare function resetAllGuilds();

    /**
     * Reset all guilds's users from the users array.
     */
    export declare function updateAllGuildsUsers(options: Object);
    /**
     * Update all guilds with missing informations
     * @param {Object} options 
     */
    export declare function updateAllGuilds(query: Object, options: Object);