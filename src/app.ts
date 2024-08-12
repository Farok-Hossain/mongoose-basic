import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { model, Schema } from "mongoose";

const app: Application = express();

app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inseting a test data into mongodb
  /*
    step1: Interface
    step2: Schema
    step3: Model
    step4: Database Query on model 
    */

  //   res.send("Hello Worldd!");
  //   next();

  // creating interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    parmanentAddress: string;
  }

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
  const User = model<IUser>("User", userSchema);

  // connect Mongdb
  const createUserToDb = async () => {
    const user = new User({
      id: "123456",
      role: "student",
      password: "1234",
      name: {
        firstName: "Shamim",
        lastName: "Hossain",
      },
      gender: "male",
      email: "farokafs000@gmail.com",
      contactNo: "01618603009",
      emergencyContactNo: "01818603009",
      presentAddress: "Shukrabad",
      parmanentAddress: "Tangail",
    });
    await user.save();
    console.log(user);
  };
  createUserToDb();
});

export default app;
