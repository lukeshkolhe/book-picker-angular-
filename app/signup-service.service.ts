import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { UserSignup } from '../app/user-signup';
import { UserLogin } from '../app/user-login';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  _URL='http://c93ed69a.ngrok.io/signup';

  constructor( private _http: HttpClient ) { }

  register(userSignup: UserSignup){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this._URL, JSON.stringify(userSignup), {headers: headers});
  }

  login(userLogin: UserLogin){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post("http://c93ed69a.ngrok.io/login", JSON.stringify(userLogin), {headers: headers});
  }
}


