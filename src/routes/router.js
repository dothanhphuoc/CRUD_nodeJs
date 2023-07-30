import express from "express";

import {
  homeController,
  detailUser,
  formAddUser,
  createNewUser,
} from "../controller/homeController";

const router = express.Router();

router.get("/", homeController);

router.get("/detail/user/:id", detailUser);

router.get("/form-add-user", formAddUser);

router.post("/add-new-user", createNewUser);

export default router;
