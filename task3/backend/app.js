import express from "express";
import usersRouter from "./routes/usersRouter.js";

const app = express();

app.use(express.json());
const PORT = 3001;

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
