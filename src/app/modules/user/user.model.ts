import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

// creating schema
const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: { type: String },
  gender: { type: String, enum: ["male", "female"] },
  email: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
});

// creating model
export const User = model<IUser>("User", userSchema);
