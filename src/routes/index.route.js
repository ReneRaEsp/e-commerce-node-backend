import routerx from "express-promise-router";
import categoryRouter from "./category.route";
import productRouter from "./product.route";

const router = routerx();

router.use("/category", categoryRouter);

router.use("/product", productRouter);

export default router;
