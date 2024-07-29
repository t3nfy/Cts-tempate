import { Job } from "bullmq";
import Client from "../structures/Client";

export type WorkerRun = (client: Client, job: Job) => Promise<void>;