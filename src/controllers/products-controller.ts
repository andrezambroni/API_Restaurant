import { NextFunction, Request, Response } from "express"

export class ProductsController {
  // pq ta usando async
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "OK" })
    } catch (error) {
      next(error)
    }
  }
}

