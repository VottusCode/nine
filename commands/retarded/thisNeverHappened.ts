import { TextChannel } from "discord.js";
import { makeNineCommand } from "../../helpers/makeNine";

export default makeNineCommand({
  name: "this never happened",
  onlyMia: true,
  prefixed: false,
  async run(message, [amount]) {
    // if (!(message.channel instanceof TextChannel)) return;
    if (message.channel.type === "dm") return;

    const toRemove = Number(amount) + 1;

    if (toRemove >= 100)
      return await (
        await message.reply("the amount must be less than 100!")
      ).delete({
        timeout: 1000,
      });

    await message.channel.bulkDelete(toRemove);
  },
});
