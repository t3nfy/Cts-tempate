import { ApplicationCommand, ApplicationCommandManager } from "discord.js";
import Client from "../../structures/Client";

export default (client: Client): ApplicationCommandManager | undefined => {
    return client.application?.commands
}