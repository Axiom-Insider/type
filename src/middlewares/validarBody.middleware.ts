import { NextFunction, Request, Response } from "express";
import { AppError } from "./erroHandler";
import { ZodError, ZodSchema } from "zod";

export default function validarBody(schema: ZodSchema){
    return (req:Request, res:Response, next:NextFunction)=>{
        try {
            schema.parse(req.body);
            next();
        } catch (error:any) {
            if(error instanceof ZodError){
                return res.status(400).json({
                    error:error.issues.map(issue=>issue.message)
                })
            }
        }
    }
}