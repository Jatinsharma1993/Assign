import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddDetailsService {
  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient,
              private fb : FormBuilder) { }


    phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  formModel = this.fb.group({
    user_id : ['' , Validators.required ],
    company_name : ['' , Validators.required],
    type_of_company : ['' , Validators.required],
    website : ['' , Validators.required],
    phone : ['' , [Validators.required , Validators.minLength(10) , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    company_address : ['' , Validators.required ],
    city : ['' , Validators.required],
    state : ['', Validators.required],
    zipcode : ['', [Validators.required ,Validators.minLength(6) ,Validators.pattern("^[0-9]{5}(?:-[0-9]{4})?$")]],
    country : ['', Validators.required]
  });

  addDetails(formData : any){
    return this.http.post(this.baseUrl + "addCompanyInfo" , formData);
  }

}



