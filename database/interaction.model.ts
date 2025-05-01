import { model, models, Schema, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string; // like/dislike/follow/unfollow
  actionId: Types.ObjectId; // question/ answer/ user/
  actionType: "question" | "answer"; // type of action (question/ answer)
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
    actionType: { type: String, enum: ["question", "answer"], required: true },
  },
  { timestamps: true }
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
