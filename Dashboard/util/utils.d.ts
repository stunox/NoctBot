import { Guild, GuildFeatures } from "discord.js";
import { GuildUserData } from "../../util/functions";

export declare function getMutualGuilds(userGuilds: UserGuild[], botGuilds: Guild[]): UserGuild[];

export declare function getAdminGuilds(guilds: UserGuild[]): UserGuild[]

export declare function getGuildIcon(guildID: string, hash: string): String;

export declare function getNonMutualGuilds(userGuilds: UserGuild[], mutualGuilds: UserGuild[]): UserGuild[]

export declare function sortGuilds(userGuilds: UserGuild[], mutualGuilds: UserGuild[]): UserGuild[];

export declare function sortUsers(users: GuildUserData[], type: String);

export declare interface UserGuild {
    id: String;
    name: String;
    icon: String;
    owner: Boolean;
    permissions: Number;
    features: [GuildFeatures]
    permissions_new: String;
}