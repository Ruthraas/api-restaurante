import { Router } from "express";

import { productsRoutes } from "./products-routes";
import { tableSessionsRoutes } from "./tables-sessions-routes";
import { tablesRoutes } from "./tables-routes";

const routes = Router();
routes.use("/tables-sessions", tableSessionsRoutes);
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);

export { routes };
