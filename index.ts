import { Client } from "discord.js";
import { TOKEN } from "./constants";
import tag from "./helpers/tag";
import initCommands from "./init/initCommands";

const bot = new Client();

(async () => {
  await initCommands(bot);
  try {
    await bot.login(TOKEN);
    console.log("logged in, poggers |", tag(bot.user!));
  } catch (e) {
    console.error("uwu owo i made a fucky wucky", { e });
  }
})();
