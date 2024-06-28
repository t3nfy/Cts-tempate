import { Awaitable } from "discord.js";
import Client from "../structures/Client";

export interface EventOptions {
    name: string;

    once?: boolean;
}
export type EventRun = (client: Client, ...args: any[]) => Awaitable<void>;