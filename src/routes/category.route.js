import routerx from "express-promise-router";
import categoryController from "../controllers/category.controller";

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
} = categoryController;

router.post("/add", add);

router.get("/query/:id", queryById);

router.get("/query-name/:name", queryByName);

router.get("/list", list);

router.put("/update", update);

router.delete("/remove", remove);

router.put("/activate", activate);

router.put("/deactivate", deactivate);

export default router;
