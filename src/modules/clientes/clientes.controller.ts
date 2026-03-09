import { Request, Response } from "express";
import ClientesService from "./clientes.service";
import { Clientes, Prisma } from "@prisma/client";

export default class ClientesController {
  private service: ClientesService = new ClientesService();

  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const cliente = this.service.create(req.body);
      res.status(201).json(cliente);
    } catch (error: any) {
        res.status(400).json({ error: error.menssage });
        throw new error
    }
  };

  public findAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const cliente = await this.service.findAll();
      res.json(cliente);
    } catch (error: any) {
      res.status(404).json({ error: error.menssage });
    throw new error
    }
  };
}
