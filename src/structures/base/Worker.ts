import { WorkerRun } from "../../types/Worker";

export default class Worker {
    constructor(
        public name: string,
        public run: WorkerRun
    ) { }
}
