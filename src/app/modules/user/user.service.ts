import { User } from "./user.model";

export const createUserToDb = async () => {
  const user = await new User({
    id: "2222222",
    role: "student",
    password: "1234",
    name: {
      firstName: "Azad",
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
  return user;
};
