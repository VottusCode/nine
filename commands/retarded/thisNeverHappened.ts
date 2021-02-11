import { TextChannel } from "discord.js";
import { makeNineCommand } from "../../helpers/makeNine";

export default makeNineCommand({
  name: "this never happened",
  onlyMia: true,
  prefixed: false,
  async run(message) {
    if (!(message.channel instanceof TextChannel)) return;

    await message.channel.bulkDelete(6);
    return await message.reply("this bot's code was never fucked up");
  },
});
