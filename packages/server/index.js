const express = require("express");
const messageRouter = require("./routers/messageRouter");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", messageRouter);

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
