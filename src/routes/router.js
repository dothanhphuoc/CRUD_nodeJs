import express from "express";

import { homeController, detailUser } from "../controller/homeController";

const router = express.Router();

router.get("/", homeController);

router.get("/detail/user/:id", detailUser);


export default router;
