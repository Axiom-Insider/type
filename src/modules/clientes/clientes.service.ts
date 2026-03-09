import ClientesRepository from './clientes.repository';
import {Clientes} from "@prisma/client";
import { ClientesDTO, CreateClienteDTO } from '../../types';
import { AppError } from '../../middlewares/erroHandler';




export default class ClientesService {
    private repository:ClientesRepository = new ClientesRepository()

    async create(data:CreateClienteDTO):Promise<Clientes>{
        
        const clienteExiste:Clientes | null = await this.repository.findByCpf(data.cpf);
        if(clienteExiste)throw new AppError("Cpf já esta cadastrado", 409);
        return this.repository.create(data);
    }

    async findAll():Promise<Clientes[]>{
        return this.repository.findAll();
    }

}

