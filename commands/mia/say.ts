import { TextChannel } from "discord.js";
import { MIA_PREFIX } from "../../constants";
import { makeNineCommand } from "../../helpers/makeNine";

export default makeNineCommand({
  name: "say",
  onlyMia: true,
  prefixed: "MIA",
  async run(message) {
    await message.delete();
    return await message.channel.send(
      message.content.substr(`${MIA_PREFIX}say `.length)
    );
  },
});
