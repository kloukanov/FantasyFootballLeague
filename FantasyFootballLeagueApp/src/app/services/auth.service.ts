import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = "http://localhost:3000/users/";
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }


  login(model: any):Observable<any>{
    return this.http.post(this.authURL + "login", model).pipe(
      map((response: any) => {
        const user = response;
        if(user.result == 'success'){
          console.log(user.result);
          //localStorage.setItem('token', user.token);
          this.isLoggedIn = true;
          localStorage.setItem('loggedIn', "success")
        }
      })
    )
  }


  getIsLoggedIn(){
    return this.isLoggedIn;
  }

}
