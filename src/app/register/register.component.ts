import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  response : any;
  error : any;
  @Output() cancelRegister = new EventEmitter<boolean>();
  constructor(public authService : AuthService ,
              private router : Router,
              private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    const formValue = {
      email : this.authService.formModel.value.email,
      first_name : this.authService.formModel.value.first_name,
      password  : this.authService.formModel.value.password ,
      role : this.authService.formModel.value.role,
      city : this.authService.formModel.value.city,
      state : this.authService.formModel.value.state,
      country  : this.authService.formModel.value.country ,
      latitude : this.authService.formModel.value.latitude,
      longitude : this.authService.formModel.value.longitude,
    };
    this.authService.register(formValue).subscribe((resp : any) =>{
      this.response = resp;
      console.log(resp);
      if(this.response){
        this.router.navigateByUrl("/company-details");
        this.authService.formModel.reset();
       this.toastr.success(this.response.message ,"Registration Successfull")
      }
    },error =>{
      console.log(error);
      if(error.status == 400){
        let message = error.error.message;
          this.toastr.error(message , "Registration Failed");
      }
    })
  }


  cancel(){
    this.cancelRegister.emit(false);
  }


}
