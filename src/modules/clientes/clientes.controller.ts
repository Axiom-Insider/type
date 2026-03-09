import { NextFunction, Request, Response } from "express";
import ClientesService from "./clientes.service";

export default class ClientesController {
  private readonly service: ClientesService = new ClientesService();

  public create = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    try {
      const cliente = await this.service.create(req.body);
      res.status(201).json(cliente);
    } catch (error: any) {
        next(error)
    }
  };

  public findAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const cliente = await this.service.findAll();
      res.json(cliente);
    } catch (error: any) {
      res.status(404).json({ error: error.menssage });
    }
  };
}
