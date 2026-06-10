import type { Command } from "./types";
import { COMMANDS } from "./commands";

export function getFilteredCommands(query: string): Command[] {
    if(query.length === 0) return COMMANDS;
    return COMMANDS.filter((CMD) => CMD.name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
}