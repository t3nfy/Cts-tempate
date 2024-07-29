import Client from "../../structures/Client";
import Event from "../../structures/base/Event";
import registerCommands from "../../structures/utils/commands/registerCommands";
import "colors"

export default new Event(
    {
        name: "ready",
        once: true,
    },
    async (client: Client) => {

        console.log("[info] Client is ready".green);

        await registerCommands(client);

    }
);