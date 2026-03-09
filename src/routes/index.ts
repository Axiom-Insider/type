import { Router } from "express";
import ClitesRoutes from "../modules/clientes/clientes.routes";

const router = Router()

router.use("/clientes", ClitesRoutes)


export default router;