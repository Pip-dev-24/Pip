# Accepted activity types
ActivityType.Playing

ActivityType.Listening

ActivityType.Watching

ActivityType.Competing

ActivityType.Streaming:

Lets you use url parameter. This can be a YouTube or Twitch link.
ActivityType.Custom

Accepted statusses
"online" "offline" "idle" "dnd"

# An Example of this:
const { ActivityType } = require('discord.js')

client.user.setPresence({ activities: [{ name: 'with depression', type: ActivityType.Streaming, url: 'https://twitch.tv/monstercat' }], status: 'online' });

//This isn't the main page for our bot for security reasons!
