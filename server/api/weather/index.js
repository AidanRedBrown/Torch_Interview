import express from "express";
import * as controller from "./weather.controller.js";

const router = express.Router();

router.get("/requests", controller.getRequests);

router.get("/:location", controller.getWeather);

export { router }