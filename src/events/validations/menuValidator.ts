import { AnySelectMenuInteraction, Interaction } from "discord.js";
import Client from "../../structures/Client";
import Event from "../../structures/base/Event";
import getComponents from "../../structures/utils/components/getComponents";
import { MenuRun } from "../../types/Component";
import "colors";

export default new Event(
    {
        name: "interactionCreate",
    },
    async (client: Client, interaction: Interaction) => {
        if (!interaction.isAnySelectMenu()) return;
        const menus = await getComponents("menus");

        try {
            const menuObject = menus.find(
                (menu) => menu.name === interaction.customId
            );

            if (!menuObject) return;

            await (menuObject.run as MenuRun)(
                client,
                interaction as AnySelectMenuInteraction
            );
        } catch (error) {
            console.log("[error] Something went wrong in menu validator:".red);
            console.log(error);
        }
    }
);