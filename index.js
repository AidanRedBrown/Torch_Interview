import startApp from "./server/app.js";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

startApp(PORT);