import { Job } from "bullmq";
import Client from "../../structure/Client";
import Worker from "../../structure/base/Worker";

export default new Worker(
    "exampleWorker",
    async (client: Client, job: Job) => {
        console.log(`Executing job: ${job.data.name}`)
    }
);
