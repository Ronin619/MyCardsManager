import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

//dotenv configs
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export default app;
