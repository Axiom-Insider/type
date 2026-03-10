import z from "zod";
import { CreateClienteSchema } from "./clientes.schema";


export type ClienteDTO = z.infer<typeof CreateClienteSchema>;

export type CreateClienteDTO = Omit<ClienteDTO, "id" | 'created_at'>;

