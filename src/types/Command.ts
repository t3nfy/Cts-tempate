import { Awaitable, ChatInputCommandInteraction } from "discord.js";
import Client from "../structures/Client";

export interface CommandOptions {
    enabled: boolean;
}

export type CommandRun = (
    client: Client,
    interaction: ChatInputCommandInteraction
) => Awaitable<void>;
