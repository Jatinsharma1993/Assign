import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  islogin : boolean = false;
  response : any;
  constructor(private authServ : AuthService ,
              private toastr : ToastrService,
              private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.islogin = true
    }else{
      this.islogin = false;
    }
  }

  login(formData : NgForm){ 
    var formValue = formData.value;
    this.authServ.login(formValue).subscribe(resp =>{
      this.islogin = true;
      this.response = resp;
      localStorage.setItem("token", this.response.token)
      this.router.navigateByUrl("/company-details");
    },error =>{
      console.log(error);
      if(error.status == 400){
        let message = error.error.message;
          this.toastr.error(message , "Authentication Failed");
      }
        
    })
    
    
  }
  
  logout(){
    this.authServ.logout();
    this.islogin = false;
    this.router.navigateByUrl("/");
  }


}
