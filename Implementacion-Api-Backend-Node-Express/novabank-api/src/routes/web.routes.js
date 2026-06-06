import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "NovaBank API",
  });
});

router.get("/register", (req, res) => {
  res.render("auth/register", {
    title: "Registro",
  });
});

router.get("/login", (req, res) => {
  res.render("auth/login", {
    title: "Login",
  });
});

router.get("profile", (req, res) => {
  res.render("auth/profile", {
    title: "Perfil",
  });
});

export default router;
