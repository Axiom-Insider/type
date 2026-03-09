import { Router } from "express";
import ClientesController from "./clientes.controller";
import validarBody from "../../middlewares/validarBody.middleware";
import { CreateClienteSchema } from "./clientes.schema";



const ClitesRoutes = Router()
const controller = new ClientesController()


ClitesRoutes.post("/", validarBody(CreateClienteSchema), controller.create)
ClitesRoutes.get("/", controller.findAll)


export default ClitesRoutes;