import { Request, Response, NextFunction } from "express"

export class TableSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      response.status(201).json({ message: "Table session created" })
    } catch (error) {
      next(error)
    }
  }
}
