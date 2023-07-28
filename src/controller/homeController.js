//connect database
import pool from "../configs/connectDB";

let homeController = async (req, res) => {
  const [rows, field] = await pool.execute("select * from `users`");
  return res.render("index.ejs", { dataUsers: rows });
};

let detailUser = async (req, res) => {
  let id = req.params.id;

  let user = await pool.execute("select * from `users` where id = ?", [id]);
  return res.render("detailUser.ejs", { user: user[0] });
};

export { homeController, detailUser };
