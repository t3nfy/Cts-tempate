import mongoose, { Schema } from "mongoose";
import { IExample } from "../../../types/Shema";

const ExampleSchema = new Schema<IExample>({
    userId: { type: String },
});

export default mongoose.model("Example", ExampleSchema);