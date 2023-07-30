//connect database
import pool from "../configs/connectDB";

let homeController = async (req, res) => {
  const [rows, field] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUsers: rows });
};

let detailUser = async (req, res) => {
  let id = req.params.id;

  let user = await pool.execute("SELECT * FROM `users` WHERE id = ?", [id]);
  return res.render("detailUser.ejs", { user: user[0] });
};

let formAddUser = async (req, res) => {
  return res.render("formAddUser.ejs");
};

let createNewUser = async (req, res) => {
  let user = req.body;
  await pool.execute(
    "INSERT INTO `users` (firstName, lastName, email, address) VALUES ( ?, ?, ?, ?)",
    [user.firstName, user.lastName, user.email, user.address]
  );
  return res.redirect("/");
};

export { homeController, detailUser, formAddUser, createNewUser };
