import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor( private auth:AuthService, private router:Router) {}
  ngOnInit():void{}

  public userName = ''
  public password = ''
  public errroMesaage = ''

  login(){
    if(this.userName.trim().length===0){
      this.errroMesaage = "username needed"
    }else if(this.password.trim().length===0){
      this.errroMesaage = "password needed"
  }else{
    this.errroMesaage = ' '
    let response = this.auth.login(this.userName,this.password)
    if (response == 200){
      this.router.navigate(['home'])
    }else if (response == 403){
      this.errroMesaage = " Invalide Cred"
    }
  }
}

}
