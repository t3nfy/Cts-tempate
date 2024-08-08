import { AnySelectMenuInteraction, Interaction } from "discord.js";
import Client from "../../structure/Client";
import Event from "../../structure/base/Event";
import getComponents from "../../structure/utils/components/getComponents";
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