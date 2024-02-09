import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private customerService: CustomerService, 
    private activatedRouted: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.customerService.emissorDeEvento.subscribe(
      res => alert(`Eu componente pizza, fui notificado com a mensagem: ${res}`)
    )

    
    //parâmetros de rotas
    this.activatedRouted.params.subscribe(
      res => console.log("Id: " + res['id'], "User: " + res['user'], res)
    )

    //parâmetros de consulta
    this.activatedRouted.queryParams.subscribe(
      res => console.log("Nome: " + res['nome'], res)
    )  
   
    //Redirecionamento 
    /*setInterval(() => {
        //this.router.navigate(['/']);
        this.router.navigateByUrl('/');
    }, 3000)
    */
  }

}
