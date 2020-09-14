import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "./../services/authenticate.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(private authSvc: AuthenticateService) {}

  ngOnInit() {}

  async onRegister(email, password) {
try {
  const user = await this.authSvc.register(email.value, password.value)
  if (user){
    console.log('user', user);
    
    // checkemail
  } {
    
  }
} catch (error) {
  console.log(error);
  
}
  }
}
