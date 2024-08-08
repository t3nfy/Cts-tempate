import { Client as DJSClient, GatewayIntentBits, Partials } from "discord.js";
import "dotenv/config";
import EventHandler from "./handlers/EventHandler";
import Db from "./db/Db";
import Cache from "./db/Cache";

export default class Client extends DJSClient {
  constructor() {
    super({
      intents: <number[]>Object.values(GatewayIntentBits),
      partials: <number[]>Object.values(Partials),
    });
  }

  events: EventHandler = new EventHandler(this);

  db: Db = new Db(process.env.MONGODB_URI as string);

  cache: Cache = new Cache(process.env.REDIS_URL as string);

  start() {
    this.events.load();
    this.db.connect();
    this.login(process.env.BOT_TOKEN);
  }
}
