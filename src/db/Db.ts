import mongoose, { Mongoose } from "mongoose";
import "colors";

export default class Db {
  constructor(private mongoURI: string) {
    this.connect();
  }

  async connect(): Promise<boolean> {
    try {
      if (!this.mongoURI) return false;

      const mongo: Mongoose = await mongoose.connect(this.mongoURI);

      if (!mongo) return false;
      return true;
    } catch (error) {
      console.log("[error] Can't connect to db:".red);
      console.log(error);
      return false;
    }
  }

  get connected(): boolean {
    return mongoose.connection.readyState === 1;
  }

  async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
    } catch (error) {
      console.log("[error] Can't disconnect from db:".red);
      console.log(error);
    }
  }

  // other functions

}
