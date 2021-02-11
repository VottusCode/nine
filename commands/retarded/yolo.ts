import { makeNineCommand } from "../../helpers/makeNine";

export default makeNineCommand({
  name: "yolo",
  onlyMia: true,
  prefixed: true,
  async run(message) {
    // console.log("fetching the users");
    // return (await message.guild!.members.fetch()).array().forEach((member) => {
    //   try {
    //     console.log("owo", tag(member.user));
    //   } catch (e) {
    //     console.log("well fuck you too", tag(member.user));
    //   }
    // });
    // FIXME: currently broken so fuck you
  },
});
