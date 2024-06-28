import mongoose, { Schema } from "mongoose";
import { IExample } from "../../types/Db";

const ExampleSchema = new Schema<IExample>({
    name: { type: String },
});

export default mongoose.model("Example", ExampleSchema);
