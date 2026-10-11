const express = require("express");
const { apiResponse } = require("./response");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    apiResponse(res, 200, "hello world", { version: "1.0" });
});

app.listen(PORT, () => {
    console.log(`express-service running on port ${PORT}`);
});
