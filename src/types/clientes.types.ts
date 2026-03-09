export type ClientesDTO = {
    id:number;
    email:string;
    nome:string;
    cpf:string;
    telefone:string;
    created_at:Date;
}

export type CreateClienteDTO = Omit<ClientesDTO, "id" | 'created_at'>;

