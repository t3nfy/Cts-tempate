import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import { CommandOptions, CommandRun } from "../../types/Command";

export default class Command {
  constructor(
    public data: RESTPostAPIChatInputApplicationCommandsJSONBody,

    public options: CommandOptions,

    public run: CommandRun
  ) { }
}