const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `--Semih Kutsal`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `"H"`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Kabkav>#0`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Santo`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://linktr.ee/therealmofsanto]`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
