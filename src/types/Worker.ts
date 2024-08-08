import { Job } from "bullmq";
import Client from "../structure/Client";

export type WorkerRun = (client: Client, job: Job) => Promise<void>;