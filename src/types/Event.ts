import { Awaitable } from "discord.js";
import Client from "../structure/Client";

export interface EventOptions {
    name: string;

    once?: boolean;
}
export type EventRun = (client: Client, ...args: unknown[]) => Awaitable<void>;