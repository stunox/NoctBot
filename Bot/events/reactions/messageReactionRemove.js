const {
    MessageReaction
} = require('discord.js');
const functions = require('./messageReactionRemove')

module.exports = functions.reactionRem = async (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.resolve(user.id)
    
    const settings = await client.getGuild(message.guild)
    if (!settings || settings == undefined) return client.createGuild(message.guild);

    const check_mark = client.emojis.resolve(client.localEmojis.checkMark);
    const tada = client.emojis.resolve(client.localEmojis.tada);
    const announcEmoji = client.emojis.resolve(client.localEmojis.warning);
    const eyesEmoji = client.emojis.resolve(client.localEmojis.alert);
    const alertEmoji = client.emojis.resolve(client.localEmojis.alert);

    if (user.bot) return;

    if (messageReaction.partial) {
        await messageReaction.fetch();
        return;
    }

    if (message.author.id == client.user.id) {
        if (message.guild.id == '727494941911154688') {
            if (message.id == '823203954833227806') {
                const givRole = message.guild.roles.resolve('822213564752330792');
                const announRole = message.guild.roles.resolve('822500136176451684');
                const updateRole = message.guild.roles.resolve('822500107973820466');
                const spoilRole = message.guild.roles.resolve('822500061736337428');

                switch (messageReaction.emoji) {
                    case tada: {
                        member.roles.remove(givRole.id).then(() => {
                            member.send({
                                embeds: [{
                                    title: 'Role Removed',
                                    description: `${check_mark}You have successfully got **${givRole.name}** role removed by unreacting in **_${message.guild.name}_** !`
                                }]
                            })
                        }).catch((err) => {})
                        break;
                    }
                    case announcEmoji: {
                        member.roles.remove(announRole.id).then(() => {
                            member.send({
                                embeds: [{
                                    title: 'Role Removed',
                                    description: `${check_mark}You have successfully got **${announRole.name}** role removed by unreacting in **_${message.guild.name}_** !`
                                }]
                            })
                        }).catch(() => {})
                        break;
                    }
                    case alertEmoji: {
                        member.roles.remove(updateRole.id).then(() => {
                            member.send({
                                embeds: [{
                                    title: 'Role Removed',
                                    description: `${check_mark}You have successfully got **${updateRole.name}** role removed by unreacting in **_${message.guild.name}_** !`
                                }]
                            })
                        }).catch(() => {})
                        break;
                    }
                    case eyesEmoji: {
                        member.roles.remove(spoilRole.id).then(() => {
                            member.send({
                                embeds: [{
                                    title: 'Role Removed',
                                    description: `${check_mark}You have successfully got **${spoilRole.name}** role removed by unreacting in **_${message.guild.name}_** !`
                                }]
                            })
                        }).catch(() => {})
                        break;
                    }
                }
                return;
            }
        }
    }
}