const {
    MessageEmbed,
    GuildChannel
} = require('discord.js');

const {
    Client
} = require('../../../util/functions');

/**
 * @event Client#channelCreate 
 * @param {Client} client
 * @param {GuildChannel} channel 
 * @returns 
 */
module.exports = async (client, channel) => {
    if (channel.type == "dm") return;
    else {
        const settings = await client.getGuild(channel.guild)
        const logs = settings.general.logs == 'logs' ? 'None' : channel.guild.channels.resolve(settings.general.logs);

        if (!channel.manageable || !channel) return;
        const count = settings.countChannels;
        if (count.enable && count.list.length > 0) {
            console.log(count);
            const channels = count.list.filter(c => c.category.id.toLowerCase() == 'channels');
            if (!channels || channels.length < 1) return;
            else {
                channels.forEach(async m => {
                    if (m.type == 'all' || (m.type == 'categories' && channel.type == 'category') || (m.type == 'voice' && channel.type == 'voice' || (m.type == 'text' && (channel.type == 'text' || channel.type == 'news')))) {
                        const chnl = await channel.guild.channels.resolve(m.id);
                        if (chnl) await chnl.setName(chnl.name.slice(0, (chnl.name.length - (channel.guild.channels.cache.size - 1).toString().length)) + channel.guild.channels.cache.size)
                    }
                })

            }
        }


        if (!channel.guild.me.permissions.has('VIEW_AUDIT_LOG')) return;
        // await channel.guild.fetchAuditLogs({
        //     limit: 1,
        //     type: 'CHANNEL_CREATE'
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

        // }).catch((err) => {});


    };
};