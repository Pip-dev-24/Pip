const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about the user.'),
  run: ({ interaction }) => {
    interaction.reply({content: `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`, ephemeral: true});
  },
  devOnly: false,
};
