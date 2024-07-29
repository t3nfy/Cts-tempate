import { Interaction } from "discord.js";
import Client from "../../structures/Client";
import getLocalCommands from "../../structures/utils/commands/getLocalCommands";
import Event from "../../structures/base/Event";
import "colors";

export default new Event(
    {
        name: "interactionCreate",
    },
    async (client: Client, interaction: Interaction) => {
        if (!interaction.isChatInputCommand()) return;
        const localCommands = await getLocalCommands();

        try {
            const commandObject = localCommands.find(
                (cmd) => cmd.data.name === interaction.commandName
            );
            if (!commandObject) {
                await interaction.reply("Command is outdated");
                return;
            }
            const commandOptions = commandObject.options;

            await commandObject.run(client, interaction);
        } catch (error) {
            console.log("[error] Something went wrong in commands validator:".red);
            console.log(error);
        }
    }
);