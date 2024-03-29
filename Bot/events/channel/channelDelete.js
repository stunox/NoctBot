const {
    MessageEmbed,
    GuildChannel
} = require('discord.js');
const {
    Guild
} = require('../../../models');
const {
    Client
} = require('../../../util/functions');
/**
 * 
 * @event Client#channelDelete 
 * @param {Client} client
 * @param {GuildChannel} channel 
 * @returns 
 */
module.exports = async (client, channel) => {
    if (channel.type == "dm") return;
    else {
        const settings = await client.getGuild(channel.guild);
        const logs = settings.general.logs == 'logs' ? 'None' : channel.guild.channels.resolve(settings.general.logs);

        const count = settings.countChannels;
        if (count.enable) {
            const channels = count.list.filter(c => c.category.id.toLowerCase() == 'channels');
            if (!channels || !channels.length || channels == undefined || channels.length < 1) return;
            else {
                const chnl = channels.find(c => c.id == channel.id);
                if (!chnl) return;
                await Guild.updateOne({
                    guildID: channel.guild.id
                }, {
                    $pull: {
                        "countChannels.id": chnl.id
                    }
                }).then()
            }
        }
        if (!channel.guild.me.permissions.has('VIEW_AUDIT_LOG')) return;
        // await channel.guild.fetchAuditLogs({
        //     limit: 1,
        //     type: 'CHANNEL_DELETE'
        // }).then(async f => {

            // const latestChannelCreated = await f.entries.first();
            // const {
            //     executor
            // } = await latestChannelCreated;

            // const embed = new MessageEmbed()
            //     .setAuthor("Channel Created")
            //     .setThumbnail(executor.avatarURL())
            //     .setColor("#000000")
            //     .setDescription(`New channel : ${channel} (${channel.name}) \nType : ${channel.type} \nBy ${executor.tag} (<@${executor.id}>)`)
            //     .setTimestamp()
            //     .setFooter(channel.guild.name, channel.guild.iconURL());


            // logs == undefined || !logs || logs == 'None' ? (channel.isText() ? channel.send({embeds: [embed]}) : '') : logs.send({embeds: [embed]});

        // }).catch((err) => {
        //     console.log(err);
        // });


    };
};