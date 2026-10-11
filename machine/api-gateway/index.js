const http = require("http");
const httpProxy = require("http-proxy");
const express = require("express");

const AI_SERVICE = process.env.AI_SERVICE_URL || "http://localhost:8000";
const BASE_SERVICE = process.env.BASE_SERVICE_URL || "http://localhost:4001";

const proxy = httpProxy.createProxyServer({});

const app = express();

app.use("/api/ai", (req, res) => {
    req.url = req.url === "/" ? "/" : req.url;
    proxy.web(req, res, { target: AI_SERVICE }, (err) => {
        res.status(502).json({ success: false, message: "ai service unavailable", data: {} });
    });
});

app.use("/api/base", (req, res) => {
    req.url = req.url === "/" ? "/" : req.url;
    proxy.web(req, res, { target: BASE_SERVICE }, (err) => {
        res.status(502).json({ success: false, message: "base service unavailable", data: {} });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`api-gateway running on port ${PORT}`);
});
