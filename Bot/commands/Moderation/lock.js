const {
    MESSAGES
} = require('../../../util/constants');

const functions = require('../../../util/functions');

module.exports.run = functions.run = async (client, message, args, settings) => {
    const x_mark = client.emojis.resolve('806440609127596032');
    const data = await client.getGuild(message.guild)
    const position = data.lockChannels.map(c => c.channelID).indexOf(message.channel.id)
    if (position !== -1) return message.channel.send({
        embed: {
            description: `${x_mark}This channel is already lock !`
        }
    });
    else {
        message.guild.roles.cache.forEach(async role => {
            if (role.permissions.has('MANAGE_MESSAGES')) return;
            else {
                await message.channel.updateOverwrite(role.id, {
                    SEND_MESSAGES: false
                })
            }
        });

        message.channel.edit({
            name: `🔒_${message.channel.name}`
        })
        client.lockChannel(message.guild, message.channel);
        message.channel.send({
            embed: {
                description: '🔒 - Locked Channel'
            }
        });
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.LOCK;