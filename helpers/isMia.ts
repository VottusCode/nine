import { Message } from "discord.js";
import { MIA_ID } from "../constants";

const isMia = (message: Message) => message.author.id === MIA_ID;

export { isMia };

export default isMia;
