import getAllFiles from "../utils/files/getAllFiles";
import Client from "../Client";
import * as path from "path";
import Event from "../base/Event";
import "colors";

export default class EventHandler {
  constructor(private client: Client) { }

  async load() {
    try {
      const eventFolders = getAllFiles(
        path.join(__dirname, "..", "events"),
        true
      );

      for (const eventFolder of eventFolders) {
        const eventFiles = getAllFiles(eventFolder);
        for (const eventFile of eventFiles) {
          const event = (await import(eventFile)).default as Event;
          if (event.options.once) {
            this.client.once(
              event.options.name,
              async (...arg) => await event.run(this.client, ...arg)
            );
          } else {
            this.client.on(
              event.options.name,
              async (...arg) => await event.run(this.client, ...arg)
            );
          }
        }
      }
    } catch (error) {
      console.log("[error] Something went wrong in event handler:".red);
      console.log(error);
    }
  }
}
