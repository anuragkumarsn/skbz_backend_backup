import mongoose from "mongoose";

const DBConn = () => {
  mongoose
    .connect(process.env.DB, {})
    .then(() => {
      console.log("Database connected!");
    })
    .catch((err) => {
      console.log("Database connection failed! ", err);
    });
};

export default DBConn;
