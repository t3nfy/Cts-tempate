import Client from "../../structure/Client";
import Event from "../../structure/base/Event";
import registerCommands from "../../structure/utils/commands/registerCommands";
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