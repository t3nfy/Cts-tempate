import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} from "discord.js";
import Client from "../../structures/Client";
import Command from "../../structures/base/Command";
import "colors";

export default new Command(
    new SlashCommandBuilder()
        .setName("example")
        .setDescription("Example command")
        .toJSON(),
    {
        enabled: true,
    },
    async (client: Client, interaction: ChatInputCommandInteraction) => {
        try {
            await interaction.reply({
                content: "This is example message!",
                components: [
                    new ActionRowBuilder<ButtonBuilder>().setComponents(
                        new ButtonBuilder()
                            .setCustomId("exampleBtn")
                            .setLabel("Example")
                            .setStyle(ButtonStyle.Primary)
                    ),
                ],
            });
        } catch (error) {
            console.log(`[error] Can't run exampleCmd:`.red);
            console.log(error);
        }
    }
);
