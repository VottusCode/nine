import { makeNineCommand } from "../../helpers/makeNine";
import tag from "../../helpers/tag";

export default makeNineCommand({
  name: "yolo",
  onlyMia: true,
  prefixed: true,
  async run() {
    return;
    // console.log("fetching the users");
    // return await message.guild!.members.cache.array().forEach((member) => {
    //   try {
    //     console.log("owo", tag(member.user));
    //   } catch (e) {
    //     console.log("well fuck you too", tag(member.user));
    //   }
    // });
    // FIXME: currently broken so fuck you
  },
});
