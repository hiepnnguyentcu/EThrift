const app = require("./utils/express");

const initUserRouter = require("./routers/userRouter");
const initProductRouter = require("./routers/productRouter");
const initProductCategoryRouter = require("./routers/productCategoryRouter");
const initUserAddressRouter = require("./routers/userAddressRouter");
const initOrderRouter = require("./routers/orderRouter");
const initCartRouter = require("./routers/cartRouter");

const initDatabase = require("./utils/mongoose");

initDatabase();

initCartRouter(app);
initUserRouter(app);
initProductRouter(app);
initProductCategoryRouter(app);
initUserAddressRouter(app);
initOrderRouter(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
