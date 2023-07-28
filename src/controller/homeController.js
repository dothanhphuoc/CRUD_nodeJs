//connect database
import connection from "../configs/connectDB";

let homeController = (req, res) => {
  connection.query("select * from `users`", function (err, results, fields) {
    let dataUsers = results;
    return res.render("index.ejs", { dataUsers: dataUsers });
  });
};

export { homeController };
