import { Router } from "express";

import * as authController from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  validateRegister,
  validateLogin,
} from "../validations/auth.validation.js";

const router = Router();

router.post("/register", validate(validateRegister), authController.register);

router.post("/login", validate(validateLogin), authController.login);

export default router;
