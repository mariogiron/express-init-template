// Server creation and configuration
import "dotenv/config";
import http from "node:http";
import app from "./src/app.js";

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
    console.log(error);
});