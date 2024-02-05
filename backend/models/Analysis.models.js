import { required } from "joi";
import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    entryId: {
      type: String,
      unique: true,
      required: true,
    },
    entry: {
      type: String,
      required: true,
      ref: "Journal",
    },
    userId: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      ref: "User",
    },
    mood: {
      type: String,
    },
    subject: {
      type: String,
    },
    negative: { 
        type: Boolean 
    },
    summary: { 
        type: String 
    },
    color: {
        type: String,
        default: "#0101fe"
    },
    sentimentScore: { 
        type: Number
    }
  },
  { timestamps: true }
);

export const Analysis = mongoose.model("Analysis", AnalysisSchema);
