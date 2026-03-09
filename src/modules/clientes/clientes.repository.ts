import Database from "../../config/database";
import {Clientes} from "@prisma/client"
import {ClientesDTO, CreateClienteDTO} from "../../types/index"

export default class ClientesRepository{
    private db = Database.getInstance().client;

    async create(data:CreateClienteDTO):Promise<Clientes | any>{
            return this.db.clientes.create({data})
    }


    async findByCpf(cpf:string):Promise<ClientesDTO | null>{
        return this.db.clientes.findUnique({where:{cpf}})
    }

    async findAll():Promise<Clientes[]>{
        return this.db.clientes.findMany();
    }

}