import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "../services/authenticate.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};


const body = {
  access_key_id: "W94oWs1vkCE5RUQgfiQQ",
  secret_access_key: "akMDrcgRgIAIbdFy9o4MdW7JUcri2iNAainrcNSD",
};


const BASE_URL = "https://facepad.jaak-it.com/api/v1";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {


  constructor(
    private authSvc: AuthenticateService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {}
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
       
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  private redirectUser(isVerified: boolean) {
    if (isVerified) {
      this.router.navigate(["admin"]);
    } else {
      this.router.navigate(["verify-email"]);
      // else por aqui
    }
  }

  async loginKey() {
    fetch(`${BASE_URL}/authentication`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(body), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res => res.jwt)
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  
 }


}
