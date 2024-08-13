import { HydratedDocument, Model } from "mongoose";

export interface IUser {
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

// instance methods
export interface IUserMethods {
  fullName(): string;
}

// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getStudnetUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
