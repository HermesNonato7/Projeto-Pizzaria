import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //public customers: Array<Customer> = [];
  public customers: Array<Customer> = [];
  public cidades: Array<{ cidade: string, populacao: string }> = [
    {cidade: "São Paulo", populacao: "5250.951"},
    {cidade: "São Bernardo", populacao: "350.839"},
    {cidade: "São Caetano", populacao: "221.753"}
  ]

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    //this.customers = this.customerServive.getCustomers();
    this.customerService.emissorDeEvento.subscribe(
      res => alert(`Eu componente customer, fui notificado com a mensagem: ${res}`)
    )
    this.getCustomers();
  }

  public enviaFormulario(formulario: NgForm) {
      if(formulario.invalid) {
          alert("Não é valido");
      }
      console.log(formulario.value);
      formulario.reset();
  }
  
  private getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (res) => this.customers = res,
      error: (err) => console.log(err)
    })
  }

  public addCustomer(telephone: string, cpf: string, name: string, address: string) {
    var customer: Customer = {
      id: {
        telephone: telephone,
        cpf: cpf
      },
      name: name,
      address: address
    };

    this.postCustomer(customer);
  }

  public modifyCustomer(telephone: string, cpf: string, name: string, address: string) {
    var customer: Customer = {
      id: {
        telephone: telephone,
        cpf: cpf
      },
      name: name,
      address: address
    };

    this.putCustomer(customer);
  }

  public postCustomer(customer: Customer) {
    return this.customerService.postCustomer(customer).subscribe({
      next: () => this.getCustomers(),
      error: (err) => console.log(err)
    });
  }

  public putCustomer(customer: Customer) {
    return this.customerService.putCustomer(customer).subscribe({
      next: () => this.getCustomers(),
      error: (err) => console.log(err)
    });
  }

  public deleteCustomer(telephone: string, cpf: string) {
    return this.customerService.deleteCustomer(telephone, cpf).subscribe({
      next: () => {
        this.customers = this.customers.filter(
          item => {
            return !(telephone == item.id.telephone && cpf == item.id.cpf)
          }
        )
      },
      error: (err) => console.log(err)
    });
  }

  public exit(): boolean {
    if(confirm('Deseja mesmo sair?')) {
      return true;
    }
    return false;
  }
}
