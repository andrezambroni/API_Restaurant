import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", productsController.create)
productsRoutes.put("/:id", productsController.update)
productsRoutes.delete("/:id", productsController.remove)
export { productsRoutes }

/**
 este arquivo configura e exporta um conjunto de rotas para operações CRUD (Create, Read, Update) relacionadas a produtos, 
 utilizando um controlador específico para lidar com a lógica dessas operações


 Router() é uma função do Express que cria um novo objeto roteador. 
    Este objeto roteador é usado para definir rotas de forma modular e montável.

const productsRoutes = Router()
Ao criar productsRoutes, você está criando um conjunto de rotas específicas para o recurso de produtos. 
    Isso ajuda a organizar o código, mantendo as rotas relacionadas a produtos separadas de outras rotas.

const productsController = new ProductsController()
ProductsController é uma classe que contém métodos para manipular operações relacionadas a produtos, como listar, criar e atualizar produtos.
    Ao criar uma instância de ProductsController, você está preparando um objeto que pode ser usado para chamar esses métodos. 
    Isso permite que você separe a lógica de negócios (no controlador) da definição das rotas (no roteador).
   
   
   ProductsController é uma classe que define métodos para manipular operações relacionadas a produtos, como listar, criar e atualizar produtos.
   Quando você escreve new ProductsController(), você está criando uma nova instância da classe ProductsController.
    Isso significa que você está criando um novo objeto que tem todas as propriedades e métodos definidos na classe ProductsController.

A nova instância criada é atribuída à constante productsController.
 Agora, productsController é um objeto que pode ser usado para chamar os métodos definidos na classe ProductsController.

Por que Instanciar?
Instanciar uma classe permite que você crie objetos que podem ser usados para realizar tarefas específicas.
 No seu caso, a instância productsController é usada para manipular operações relacionadas a produtos nas rotas definidas.


    */