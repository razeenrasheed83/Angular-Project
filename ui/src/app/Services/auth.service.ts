import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname:string,password:string){
    if (uname == "Admin" && password=='Admin'){
      return 200
    }else{
      return 403
    }
  }
}
