import { Router } from "express"
import { tableSessionsRoutes } from "./tables-sessions-routes"
import { productsRoutes } from "./products-routes"
import { tablesRoutes } from "./tables-routes"

const routes = Router()

routes.use("/table-sessions", tableSessionsRoutes)
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)

export {routes}