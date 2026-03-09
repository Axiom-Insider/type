import {z} from "zod"


export const CreateClienteSchema= z.object({
    nome:z.string().min(1, "Nome é Obrigatório"),
    cpf:z.string().min(11, "Cpf é Obrigatório"),
    telefone:z.string().min(8, "Telefone é Obrigatório"),
    email:z.string().email("Email é Obrigatório")
})