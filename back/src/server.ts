import express from "express"
import router from "./routers/principalRouter"

const server = express();

// para convertir los datos recibidos y enviados a formato JSON
server.use(express.json());
server.use(router);

export default server;