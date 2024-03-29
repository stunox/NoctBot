import { Client } from '../../../util/functions';
import { GuildData, GuildUserData } from '../../../util/functions'
import Discord from 'discord.js'

export declare interface AutomodOpt {
  client: Client;
  message: Discord.Message;
  args: String[];
  type: 'link' | 'invite' | 'uppercase' | 'emojis' | 'spam' | 'zalgo' | 'mentions' | 'warn-limit' | 'mute-limit';
  settings: GuildData;
  userInfo: GuildUserData
}
