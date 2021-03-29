import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  register = false;
  show = true;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.show = false
    }else{
      this.show = true;
    }
     }

  registerToggle(){
    this.register = !this.register;
  }

  cancelRegister(event : boolean){
    this.register = event;
  }

}
