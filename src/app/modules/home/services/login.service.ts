import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:8080/api/spring/";

  constructor(private http: HttpClient) { }

  public login(user: string, password: string) {
    return this.http.post(`${this.url}user/authenticate`, 
      {
        user: user,
        password: password
      }
    ).subscribe(
      data => {
        var token = JSON.parse(JSON.stringify(data)).token;
        localStorage.setItem("token", token);
      }, 
      error => {console.error("Erro ao fazer login")}
    );
  }
}
