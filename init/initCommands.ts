import { Client } from "discord.js";
import { sync as glob } from "glob";
import path from "path";

import { NineCommand } from "../types";
import { BOT_PREFIX, MIA_ID, MIA_PREFIX } from "../constants";

const initCommands = async (bot: Client) => {
  const commands: NineCommand[] = [];

  const commandFiles = glob(
    path.join(__dirname, "..", "commands", "**", "*.{ts,js}")
  );

  for (const commandFile of commandFiles) {
    console.log(commandFile);
    const command: { default?: NineCommand } = await import(commandFile);

    if (!command.default) {
      console.log(commandFile, "has no default export...");
      continue;
    }

    commands.push(command.default);
  }

  bot.on("message", async (message) => {
    let noPrefix = false;

    if (message.author.bot) return false;
    if (
      !message.content.startsWith(BOT_PREFIX) &&
      !message.content.startsWith(MIA_PREFIX)
    )
      noPrefix = true;

    const prefix = noPrefix
      ? ""
      : message.content.startsWith(MIA_PREFIX)
      ? MIA_PREFIX
      : BOT_PREFIX;

    const cmds = commands.filter((command) =>
      noPrefix
        ? !command.prefixed
        : prefix === MIA_PREFIX
        ? command.prefixed === "MIA"
        : command.prefixed && command.prefixed !== "MIA"
    );

    for (const command of cmds) {
      if (!message.content.startsWith(`${prefix}${command.name}`)) continue;
      if (command.onlyMia && message.author.id !== MIA_ID)
        return message.reply("only Mia is allowed to run this command!");

      const args = message.content
        .substr(`${prefix}${command.name} `.length)
        .trim()
        .split(" ");

      return await command.run(message, args);
    }
  });
};

export { initCommands };

export default initCommands;
