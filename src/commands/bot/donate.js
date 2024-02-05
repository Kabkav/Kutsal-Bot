const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("SemihKutsal KatılTuşu")
                .setURL("https://www.youtube.com/channel/UCDNbDLw0N19IhZg_oYnmzwQ/join")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: '_____ \n\nClick the button below for the sponsor page \n**Pay attention! sponsor is not required**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://www.youtube.com/channel/UCDNbDLw0N19IhZg_oYnmzwQ/join",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 
