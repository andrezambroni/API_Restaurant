import { Request, Response, NextFunction } from "express"
import { knex } from "@/database/knex"
import { z } from "zod"
import { AppError } from "@/utils/AppError"

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

      const session = await knex<TablesSessionsRepository>("table_sessions")
        .where({ id: table_session_id })
        .first()

      if (!session) {
        throw new AppError("Table session not found")
      }

      if (session.closed_at) {
        throw new AppError("Table session is closed")
      }

      const product = await knex<ProductRepository>("products")
        .where({ id: product_id })
        .first()

      if (!product) {
        throw new AppError("Product not found")
      }

      await knex<OrderRepository>("orders").insert({
        table_session_id,
        product_id,
        quantity,
        price: product.price,
      })

      response.status(201).json()
    } catch (error) {
      next(error)
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
        const { table_session_id } = request.params

        const order = await knex("orders").where({ table_session_id })
      return response.json(order)
    } catch (error) {
      next(error)
    }
  }
}
