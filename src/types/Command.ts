import { Awaitable, ChatInputCommandInteraction } from "discord.js";
import Client from "../structure/Client";

export interface CommandOptions {
    enabled: boolean;
}

export type CommandRun = (
    client: Client,
    interaction: ChatInputCommandInteraction
) => Awaitable<void>;
