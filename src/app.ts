import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

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
    step4: Database Query
    */

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

  //   res.send("Hello Worldd!");
  //   next();
});

export default app;
