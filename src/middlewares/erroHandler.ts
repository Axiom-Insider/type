import { NextFunction, Request, Response } from "express";



export class AppError extends Error {
    public readonly statusCode: number;

    constructor(message:string, statusCode:number = 400){
        super(message);
        this.statusCode = statusCode;
    } 
}


const errorHandler = (error:any, req:Request, res:Response, next:NextFunction):void =>{
    //Erro personalizado
    if(error instanceof AppError){
        res.status(error.statusCode).json({error:error.message})
        return;
    }

    // Erros do Prisma
  if (error.code) {
    switch (error.code) {
      case 'P2002':
        res.status(409).json({ error: `Campo duplicado: ${error.meta?.target}` });
        return;
      case 'P2025':
        res.status(404).json({ error: 'Registro não encontrado' });
        return;
      case 'P2003':
        res.status(400).json({ error: 'Erro de chave estrangeira' });
        return;
      default:
        res.status(400).json({ error: `Erro no banco de dados: ${error.code}` });
        return;
    }
  }

    //erro generico
    console.error('Errro não tratado', error);
    res.status(500).json({error:'Erro interno do servidor'})
}

export default errorHandler;