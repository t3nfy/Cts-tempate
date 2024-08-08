import mongoose, { Mongoose } from "mongoose";
import "colors";

export default class Db {
  constructor(private mongoURI: string) { }

  async connect(): Promise<boolean> {
    try {
      if (!this.mongoURI) return false;

      const mongo: Mongoose = await mongoose.connect(this.mongoURI);

      if (!mongo) return false;
      this.init();
      return true;
    } catch (error) {
      console.log("[error] Can't connect to db:".red);
      console.log(error);
      return false;
    }
  }

  async init(): Promise<void> {
    console.log("[info] Connected to mongoose".green)
  }

  async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
    } catch (error) {
      console.log("[error] Can't disconnect from db:".red);
      console.log(error);
    }
  }
}