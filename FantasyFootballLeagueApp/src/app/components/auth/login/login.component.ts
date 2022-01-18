import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    const loginObserver = {
      next: (x: string) => console.log('user logged in ' + x),
      error: (err: Error) => console.log('error logging in ' + err),
    };

    this.authService.login(f.value).subscribe(loginObserver);

    if(localStorage.getItem("loggedIn") == "success"){
      console.log("YEEES")
      this.router.navigateByUrl('/transfers');
      localStorage.clear();
    }
    


  }

}