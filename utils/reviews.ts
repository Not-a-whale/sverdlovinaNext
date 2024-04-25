// utils/posts.js
import mongoose, { Schema } from "mongoose";

const reviewsSchema = new Schema({
  name: { type: String },
  review: { type: String },
  city: { type: String },
  imageUrl: { type: String },
});

const reviewsModel =
  mongoose.models.reviews || mongoose.model("reviews", reviewsSchema);

export default reviewsModel;
