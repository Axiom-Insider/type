import ClientesRepository from './clientes.repository';
import {Clientes} from "@prisma/client";
import { ClientesDTO, CreateClienteDTO } from '../../types';




export default class ClientesService {
    private repository:ClientesRepository = new ClientesRepository()

    async create(data:CreateClienteDTO):Promise<Clientes>{
        if(!data.nome)throw new Error("Nome é Obrigatorio");
        if (!data.email) throw new Error("Email é obrigatório");
        const clienteExiste:Clientes | null = await this.repository.findByCpf(data.cpf);
        if(clienteExiste)throw new Error("Cpf já esta cadastrado");
        return this.repository.create(data);
    }

    async findAll():Promise<Clientes[]>{
        return this.repository.findAll();
    }

}

