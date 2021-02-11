import { makeNineCommand } from "../../helpers/makeNine";

export default makeNineCommand({
  name: "fucky wucky nine is pog",
  onlyMia: false,
  prefixed: false,
  async run(message) {
    return await message.channel.send(
      "you are required to follow https://twitter.com/ninesalive @here"
    );
  },
});
