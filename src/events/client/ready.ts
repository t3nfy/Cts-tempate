import Client from "../../structures/Client";
import Event from "../../structures/base/Event";
import registerCommands from "../../utils/commands/registerCommands";
import "colors"

export default new Event(
    {
        name: "ready",
        once: true,
    },
    async (client: Client) => {

        console.log("[info] Client is ready".green);

        if (client.db.connected) {
            console.log("[info] Db is connected".green);
        } else {
            console.log("[warning] Couldn't connect to Db".yellow);
        }

        if (client.cache.status === "ready") {
            console.log("[info] Cache is connected".green);
        } else {
            console.log("[warning] Couldn't connect to Cache".yellow);
        }

        await registerCommands(client);

    }
);
