import Command from "../../structures/base/Command";
import getAllFiles from "../files/getAllFiles";
import * as path from "path";

export default async (): Promise<Command[]> => {
    let localCommands = [];

    const commandFolders = getAllFiles(
        path.join(__dirname, "..", "..", "commands"),
        true
    );

    for (const commandsFolder of commandFolders) {
        const commandFiles = getAllFiles(commandsFolder);
        for (const commandObject of commandFiles) {
            const command = (await import(commandObject)).default as Command;
            localCommands.push(command);
        }
    }

    return localCommands;
};
