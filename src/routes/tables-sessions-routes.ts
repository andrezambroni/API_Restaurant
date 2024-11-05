import { Router } from "express"

import { TableSessionsController } from "@/controllers/tables-sessions.controller"

const tableSessionsRoutes = Router()
const tableSessionsController = new TableSessionsController()

tableSessionsRoutes.post("/", tableSessionsController.create)
tableSessionsRoutes.get("/", tableSessionsController.index)
tableSessionsRoutes.patch("/:id", tableSessionsController.update) // Atualização parcial
// Se tivesse uma rota PUT, seria para atualização completa
export { tableSessionsRoutes }

/*
PUT: Substitui completamente o recurso. Usado para atualizações completas.
PATCH: Modifica parcialmente o recurso. Usado para atualizações parciais.
*/