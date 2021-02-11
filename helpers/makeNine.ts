import { ClientEvents } from "discord.js";
import { NineCommand, NineEvent } from "../types";

// Type Wrapper for Commands
const makeNineCommand = <TNineCommand extends NineCommand = NineCommand>(
  cmd: TNineCommand
): TNineCommand => cmd;

const makeNineEvent = <
  TNineEvent extends NineEvent<keyof ClientEvents> = NineEvent<
    keyof ClientEvents
  >
>(
  cmd: TNineEvent
): NineEvent<TNineEvent["event"]> => cmd;

export { makeNineCommand, makeNineEvent };
