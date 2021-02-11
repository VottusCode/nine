import { ClientEvents } from "discord.js";
export type NineCommandPrefix = "MIA" | "NINE";

export interface NineCommand {
  name: string;
  prefixed?: boolean | NineCommandPrefix;
  onlyMia?: boolean;
  run: (...args: ClientEvents["message"]) => Promise<unknown>;
}

export interface NineEvent<E extends keyof ClientEvents> {
  event: E;
  prefixed?: boolean;
  onlyMia?: boolean;
  run: (...args: ClientEvents[E]) => Promise<unknown>;
}
