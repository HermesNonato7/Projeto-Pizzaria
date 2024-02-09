import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }

  public enviaFormulario(formulario: NgForm) {
    this.login.login(formulario.value['usuario'], formulario.value['senha']);
    formulario.reset();
    alert("Token recuperado, agora você pode tentar acessar as funcionalidades");
  }

}
