const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kayıt-kanal')
        .setDescription('Yeni üyelerin karşılanacağı kayıt kanalını ayarlar.')
        .addChannelOption(option => option.setName('kanal').setDescription('Kayıt kanalı').setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const kanal = interaction.options.getChannel('kanal');
        await kayıtKanalAyarla(interaction, kanal);
    },
    async executeMessage(message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return sendErrorEmbed(message, 'Bu komutu kullanmak için yönetici yetkisine sahip olmalısınız.');
        }
        const kanal = message.mentions.channels.first();
        if (!kanal) {
            return sendErrorEmbed(message, 'Lütfen bir kanal etiketleyin.');
        }
        await kayıtKanalAyarla(message, kanal);
    }
};

async function kayıtKanalAyarla(context, kanal) {
    const data = JSON.parse(fs.readFileSync('./kayıt.json', 'utf8'));
    if (!data[context.guildId]) data[context.guildId] = {};
    data[context.guildId].kayıtKanalı = kanal.id;

    fs.writeFileSync('./kayıt.json', JSON.stringify(data, null, 2));

    const embed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('Kayıt Kanalı Ayarlandı')
        .setDescription(`Kayıt kanalı ${kanal} olarak ayarlandı.`)
        .setTimestamp();

    await context.reply({ embeds: [embed], ephemeral: true });
}

function sendErrorEmbed(context, errorMessage) {
    const prefix = context.client.prefixes.get(context.guildId) || config.prefix;
    const errorEmbed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('HATA')
        .setDescription(`${errorMessage}\n\nKullanım: ${prefix}kayıt-kanal #kanal`)
        .setTimestamp();

    return context.reply({ embeds: [errorEmbed], ephemeral: true });
}