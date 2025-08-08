import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId,
    ref: "User",
   
  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["active", "paused", "canceled"],
    default: "active"
  }
}, { timestamps: true });

export const Subscription = mongoose.model("Subscription", subscriptionSchema);

