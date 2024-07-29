import { ButtonInteraction, Interaction } from "discord.js";
import Client from "../../structures/Client";
import Event from "../../structures/base/Event";
import getComponents from "../../structures/utils/components/getComponents";
import { ButtonRun } from "../../types/Component";
import "colors";

export default new Event(
    {
        name: "interactionCreate",
    },
    async (client: Client, interaction: Interaction) => {
        if (!interaction.isButton()) return;
        const buttons = await getComponents("buttons");

        try {
            const buttonObject = buttons.find(
                (button) => button.name === interaction.customId
            );

            if (!buttonObject) return;

            await (buttonObject.run as ButtonRun)(
                client,
                interaction as ButtonInteraction
            );
        } catch (error) {
            console.log("[error] Something went wrong in button validator:".red);
            console.log(error);
        }
    }
);