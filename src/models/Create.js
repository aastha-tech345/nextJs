import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    clas: {
      type: String,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
    collage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Student || mongoose.model("Student", studentSchema);
