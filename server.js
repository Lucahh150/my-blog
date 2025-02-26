const express = require("express");
const fs = require("fs");
const app = express();

app.use((req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const log = `IP: ${ip} - ${new Date().toISOString()}\n`;

    fs.appendFile("visitors.log", log, (err) => {
        if (err) console.error("Error logging IP:", err);
    });

    console.log(log);
    next();
});

app.use(express.static("public")); // Serve your HTML/CSS/JS files

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
