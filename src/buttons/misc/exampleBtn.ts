import { ButtonInteraction } from "discord.js";
import Client from "../../structures/Client";
import Component from "../../structures/base/Component";
import "colors";

export default new Component(
    "exampleBtn",
    async (client: Client, interaction: ButtonInteraction) => {
        try {
            await interaction.reply({
                content: "Hi there!",
                ephemeral: true,
            });
        } catch (error) {
            console.log("[error] Can't run exampleBtn:".red);
            console.log(error);
        }
    }
);