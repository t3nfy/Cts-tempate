import {
    AnySelectMenuInteraction,
    Awaitable,
    ButtonInteraction,
    ModalSubmitInteraction,
} from "discord.js";
import Client from "../structures/Client";

export type ComponentType = "buttons" | "menus" | "modals";
export type ButtonRun = (
    client: Client,
    interaction: ButtonInteraction
) => Awaitable<void>;
export type MenuRun = (
    client: Client,
    interaction: AnySelectMenuInteraction
) => Awaitable<void>;
export type ModalRun = (
    client: Client,
    interaction: ModalSubmitInteraction
) => Awaitable<void>;
