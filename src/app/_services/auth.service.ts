import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient,
              private fb  : FormBuilder) { }

  formModel = this.fb.group({
    email : ['' , [Validators.required , Validators.email]],
    first_name : ['' , Validators.required],
    password : ['' , [Validators.required , Validators.minLength(6)]],
    role : ['' , Validators.required],
    city : ['' , Validators.required],
    state : ['' , Validators.required ],
    country : ['' , Validators.required],
    latitude : ['', Validators.required],
    longitude : ['', Validators.required]
  });
  

  register(formData : any){
     return this.http.post(this.baseUrl + "register" , formData)
  }

  login(formData : any){
    return this.http.post(this.baseUrl + "login" , formData)
  }

  logout(){
    localStorage.removeItem("token");
  }

}
