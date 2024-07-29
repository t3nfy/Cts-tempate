import { Job } from "bullmq";
import Client from "../../structures/Client";
import Worker from "../../structures/base/Worker";

export default new Worker(
    "exampleWorker",
    async (client: Client, job: Job) => {
        console.log(`Executing job: ${job.data.name}`)
    }
);
