const express = require("express");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send({
    data: "Hello from Express",
  });
});

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
