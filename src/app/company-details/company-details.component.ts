import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddDetailsService } from '../_services/add-details.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  response : any;
  constructor(public addDetails : AddDetailsService ,
    private router : Router,
    private toastr : ToastrService) { }

  ngOnInit() {
  }

  getDetails(){
    const formValue = {
      user_id : this.addDetails.formModel.value.user_id,
      company_name : this.addDetails.formModel.value.company_name,
      type_of_company  : this.addDetails.formModel.value.type_of_company ,
      website : this.addDetails.formModel.value.website,
      phone : this.addDetails.formModel.value.phone,
      company_address : this.addDetails.formModel.value.company_address,
      city  : this.addDetails.formModel.value.city ,
      state : this.addDetails.formModel.value.state,
      zipcode : this.addDetails.formModel.value.zipcode,
      country : this.addDetails.formModel.value.country
    };
      this.addDetails.addDetails(formValue).subscribe(resp =>{
        this.response = resp;
        if(this.response.status == true){
          let message = this.response.message;
          this.addDetails.formModel.reset();
         this.toastr.success(message , "Details Added Successfull");
        }else{
          this.toastr.error( this.response.status , "Token Failed");
          
        }
      
    })
  }

  reset(){
    this.addDetails.formModel.reset();
  }

  

}
