const app = require("./utils/express");

const initUserRouter = require("./routers/userRouter");

const initDatabase = require("./utils/mongoose");

initDatabase();

initUserRouter(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
