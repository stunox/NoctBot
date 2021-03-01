import { Client, Guild, Message, TextChannel } from "discord.js";

/**
 * Return a random string for password or backup id
 * @param query
 * @returns {String}
 */
export declare function randomString(query: Object);
/**
 * Create a custom command for the guild
 * @param {Guild}
 * @param {Object}
 */
export declare function newCustomCommand(guild: Guild, options: Object);

/**
 * Function to update database when a channel is lock
 * @param {Guild} guild
 * @param {TextChannel} channel
 */
export declare function lockChannel(guild: Guild, channel: TextChannel);
/**
 * Function to update database when a channel is unlock
 * @param {Guild} guild
 * @param {TextChannel} channel
 */
export declare function unlockChannel(guild: Guild, channel: TextChannel);
/**
 * Replace some text to other
 * @param {String} text
 * @example {user} to @user
 */
export declare function replaceText(text: String, message: Message, options: Object);
/**
 * Same as replaceText but with embed object
 * @param {Object} embed 
 * @example {user} to @user
 */
export declare function replaceEmbed(embed: Object, message: Message, options: Object);

export declare function run(client: Client, message: Message, args: any);

export declare function client(client: Client)