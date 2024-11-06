import { Request, Response, NextFunction } from "express"
import { knex } from "@/database/knex"
import { z } from "zod"

export class OrdersController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_session_id: z.number(),
        product_id: z.number(),
        quantity: z.number(),
      })

      const { table_session_id, product_id, quantity } = bodySchema.parse(
        request.body
      )

      response.status(201).json()
    } catch (error) {
      next(error)
    }
  }
}
