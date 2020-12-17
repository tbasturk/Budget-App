import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public router: Router, private dataService: DataService, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  login() {

    const login = {
      username: this.f.username.value,
      password: this.f.password.value
    };

    this.dataService.login(login);
    /*
    this.http.post('http://localhost:3000/api/login', login)
    .subscribe((res: any) => {
      console.log('test');
      if (res && res.success) {
        localStorage.setItem('access', res.token);
        this.dataService.login();
      }
    }, (error: any) => {
      console.log(error);
      document.getElementById('message').innerHTML = error.error.err;
      document.getElementById('message').style.visibility = 'visible';
    });

*/
  }
  /*

 login() {

   this.dataService.login();
 }

  navigateSignup() {
    this.router.navigate(['/signup'])
  }

  */
}
