import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  
  private autorizado: boolean = false;
  public emissorDeEvento = new EventEmitter();
  private url: string = "http://localhost:8080/api/spring/";
  /*private customers: Array<Customer> = [{
    "id": {
      "telephone": "9999",
      "cpf": "999"
    },
    "name": "Ricardo",
    "address": "Av. Indianópolis, 8888"
  }];*/

  constructor(private http: HttpClient) {}

  /*public getCustomers(): Array<Customer> {
    return this.customers;
  }*/

  public getAutorizado(): boolean {
    return this.autorizado;
  }

  public getCustomers(): Observable <Array<Customer>> {
    this.autorizado = true;
  
    var token = localStorage.getItem('token');

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "" + token
      }
     )
    }

    return this.http.get<Array<Customer>>(`${this.url}customers`, httpOptions).pipe(
      res => res,
      error => error
    );
  }

  public postCustomer(customer: Customer): Observable <Customer> {
    this.emissorDeEvento.emit("Um registro será adicionado!");
    return this.http.post<Customer>(`${this.url}customers`, {
      id: {
        telephone: customer.id.telephone,
        cpf: customer.id.cpf
      },
      name: customer.name,
      address: customer.address
    }).pipe(
      res => res,
      error => error
    );
  }

  public putCustomer(customer: Customer): Observable <Customer> {
    return this.http.put<Customer>(`${this.url}customers/${customer.id.telephone}/${customer.id.cpf}`, {
      id: {
        telephone: customer.id.telephone,
        cpf: customer.id.cpf
      },
      name: customer.name,
      address: customer.address
    }).pipe(
      res => res,
      error => error
    );
  }

  public deleteCustomer(telephone: string, cpf: string) {
    return this.http.delete(`${this.url}customers/${telephone}/${cpf}`).pipe(
      res => res,
      error => error
    );
  }
}
