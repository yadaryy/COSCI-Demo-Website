const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const session = require("express-session");

app.use(session({ secret: "cosci313", resave: true, saveUninitialized: true }));

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

router.get("/", (req, res) => {
  res.redirect("/view");
});

app.use("/css", express.static(path.join(__dirname, "/src/views/assets/css")));
app.use("/logo", express.static(__dirname + "/src/views/assets/images/logo"));
app.use("/footer", express.static(__dirname + "/src/views/assets/images/footer"));
app.use("/shape", express.static(__dirname + "/src/views/assets/images/shapes"));
app.use("/hero", express.static(__dirname + "/src/views/assets/images/hero"));
app.use("/js", express.static(path.join(__dirname, "/src/views/assets/js")));
app.use("/api", require("./src/middlewares/api"));
app.use("/view", require("./src/middlewares/view"));
app.use("/public/curriculums", express.static(__dirname + "/public/curriculums"));

const port = 5005;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

