const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from your API 👋" });
});

app.post("/api/data", (req, res) => {
  res.json({ status: "success", receivedData: req.body });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:3000`));


