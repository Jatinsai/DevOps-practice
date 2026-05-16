const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Application deployed successfully in Minikube from GitHub Actions!");
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});