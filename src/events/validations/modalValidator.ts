import { Interaction, ModalSubmitInteraction } from "discord.js";
import Client from "../../structure/Client";
import Event from "../../structure/base/Event";
import getComponents from "../../structure/utils/components/getComponents";
import { ModalRun } from "../../types/Component";
import "colors";

export default new Event(
    {
        name: "interactionCreate",
    },
    async (client: Client, interaction: Interaction) => {
        if (!interaction.isModalSubmit()) return;
        const modals = await getComponents("modals");

        try {
            const modalObject = modals.find(
                (modal) => modal.name === interaction.customId
            );

            if (!modalObject) return;

            await (modalObject.run as ModalRun)(
                client,
                interaction as ModalSubmitInteraction
            );
        } catch (error) {
            console.log("[error] Something went wrong in modal validator:".red);
            console.log(error);
        }
    }
);