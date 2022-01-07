import routerx from "express-promise-router";
import productController from "../controllers/product.controller";

const router = routerx();
const {
  add,
  queryById,
  queryByName,
  list,
  update,
  remove,
  activate,
  deactivate,
  addCategory,
  removeCategory,
} = productController;

router.post("/add", add);

router.get("/query/:id", queryById);

router.get("/query/:name", queryByName);

router.get("/list", list);

router.put("/update", update);

router.put("/add-category", addCategory);

router.put("/remove-category", removeCategory);

router.delete("/remove", remove);

router.put("/activate", activate);

router.put("/deactivate", deactivate);

export default router;
