import {
    ApplicationCommand,
    ApplicationCommandManager,
    Collection,
} from "discord.js";
import Client from "../../Client";
import getApplicationCommands from "./getApplicationCommands";
import getLocalCommands from "./getLocalCommands";
import Command from "../../base/Command";
import "colors";

export default async (client: Client) => {
    try {
        const localCommands: Command[] = await getLocalCommands();
        const applicationCommandManager: ApplicationCommandManager | undefined =
            getApplicationCommands(client);
        const applicationCommands:
            | Collection<string, ApplicationCommand>
            | undefined = await applicationCommandManager?.fetch();

        for (const localCommand of localCommands) {
            const { data, options } = localCommand;

            const existingCommand: ApplicationCommand | undefined =
                applicationCommands?.find((cmd) => cmd.name === data.name);

            if (existingCommand) {
                if (!options.enabled) {
                    await applicationCommandManager?.delete(existingCommand);
                    console.log(`[info] Command '${data.name}' is deleted.`.green);
                    continue;
                }
            }

            await applicationCommandManager?.create(localCommand.data);
        }
    } catch (error) {
        console.log("[error] Something went wrong in registering commands:".red);
        console.log(error);
    }
};
