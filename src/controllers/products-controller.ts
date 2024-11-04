import { NextFunction, Request, Response } from "express"
import { knex } from "@/database/knex"
import { z } from "zod"

import { AppError } from "@/utils/AppError"

export class ProductsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.query

      const products = await knex<ProductRepository>("products")
        .select()
        .whereLike("name", `%${name ?? ""}%`)
        .orderBy("name")

      return response.json(products)
    } catch (error) {
      next(error)
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0),
      })

      const { name, price } = bodySchema.parse(request.body)

      await knex<ProductRepository>("products").insert({ name, price })

      return response.status(201).json()
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "id must be a number" })
        .parse(request.params.id)

      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0),
      })

      const { name, price } = bodySchema.parse(request.body)

      const product = await knex<ProductRepository>("products")
        .select()
        .where({ id })
        .first()

        if(!product){
          throw new AppError("product not found")
        }

      await knex<ProductRepository>("products")
        .update({ name, price, updated_at: knex.fn.now() })
        .where({ id })

      return response.json()
    } catch (error) {
      next(error)
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "id must be a number" })
        .parse(request.params.id)

      const product = await knex<ProductRepository>("products")
        .select()
        .where({ id })
        .first()

      if (!product) {
        throw new Error("product not found")
      }

      await knex<ProductRepository>("products").delete().where({ id })

      return response.json()
    } catch (error) {
      next(error)
    }
  }
}

/**
 * async: Indica que o método é assíncrono, permitindo o uso de await dentro dele.
 * Isso é útil para operações que podem demorar, como consultas ao banco de dados
 *
 * next: É uma função que passa o controle para o próximo middleware em caso de erro
 *
 * A validação é feita usando a biblioteca Zod (z), e o knex é usado para interagir com o banco de dados.
 * Em caso de erro, o next é chamado para passar o controle para o próximo middleware de erro.
 *
 * parse(request.body): O método parse do Zod valida os dados do corpo da requisição (request.body) de acordo com o esquema definido em bodySchema.
 *  Se os dados não estiverem de acordo com o esquema, uma exceção será lançada.
 *
 * bodySchema: É um esquema de validação definido usando a biblioteca Zod.
 *  Este esquema especifica as regras que os dados do corpo da requisição (request.body) devem seguir.
 *
 * knex<ProductRepository>("products"): knex é um query builder para SQL. Aqui, ele está sendo configurado para operar na tabela "products".
 *  O tipo ProductRepository é usado para tipar os dados que serão manipulados
 *
 */
