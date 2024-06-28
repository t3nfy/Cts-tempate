import { EventOptions, EventRun } from "../../types/Event";

export default class Event {
    constructor(
        public options: EventOptions,

        public run: EventRun
    ) { }
}
