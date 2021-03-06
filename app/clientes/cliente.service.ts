import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { CLIENTES } from './cliente.mock';
@Injectable()
export class ClienteService{
    getClientes() : Promise<Cliente[]> {
       return Promise.resolve(CLIENTES);        
      }
    getCliente(id:number): Promise<Cliente> {
           return this.getClientes()
           .then((clientes: Cliente[]) => clientes.find(cliente => cliente.id === id)); 
  }
}