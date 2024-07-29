import { ApplicationCommand, ApplicationCommandManager } from "discord.js";
import Client from "../../Client";

export default (client: Client): ApplicationCommandManager | undefined => {
    return client.application?.commands
}