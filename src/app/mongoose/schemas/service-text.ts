import mongoose, { Schema } from "mongoose";

const serviceTextSchema = new Schema({
  serviceTextHeading: { type: String },
  serviceTextName: { type: String },
  serviceLocale: { type: String },
  serviceHeading: { type: String },
  serviceDescription: { type: String },
  serviceTextTopRight: { type: String },
  serviceTextTopLeft: { type: String },
  servicePriceHeading: { type: String },
  serviceTextBottomLeft: { type: String },
  serviceTextBottomRight: { type: String },
});

const serviceTextModel =
  mongoose.models.serviceText ||
  mongoose.model("serviceText", serviceTextSchema, "serviceText");

export default serviceTextModel;
