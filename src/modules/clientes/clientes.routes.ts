import { Router } from "express";
import ClientesController from "./clientes.controller";



const ClitesRoutes = Router()
const controller = new ClientesController()


ClitesRoutes.post("/", controller.create)
ClitesRoutes.get("/", controller.findAll)


export default ClitesRoutes;