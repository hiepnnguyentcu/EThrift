const app = require("./utils/express");

const initUserRouter = require("./routers/userRouter");
const initProductRouter = require("./routers/productRouter");
const initProductCategoryRouter = require("./routers/productCategoryRouter");
const initUserAddressRouter = require("./routers/userAddressRouter");

const initDatabase = require("./utils/mongoose");

initDatabase();

initUserRouter(app);
initProductRouter(app);
initProductCategoryRouter(app);
initUserAddressRouter(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
