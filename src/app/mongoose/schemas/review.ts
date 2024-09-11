import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  name: { type: String },
  review: { type: String },
  city: { type: String },
  imageUrl: { type: String },
});

const reviewModel =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default reviewModel;
