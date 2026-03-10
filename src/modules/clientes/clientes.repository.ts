import Database from "../../config/database";
import {Clientes} from "@prisma/client"
import { ClienteDTO, CreateClienteDTO } from "./clientes.dto";

export default class ClientesRepository{
    private db = Database.getInstance().client;

    async create(data:CreateClienteDTO):Promise<Clientes | any>{
            return this.db.clientes.create({data})
    }


    async findByCpf(cpf_body:string):Promise<Clientes | null>{
       return await this.db.clientes.findUnique({where:{cpf:cpf_body}})

    }

    async findAll():Promise<Clientes[]>{
        return this.db.clientes.findMany();
    }

}