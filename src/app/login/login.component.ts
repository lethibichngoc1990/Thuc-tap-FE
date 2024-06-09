import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  constructor() { }
  ngOnInit(): void {
   }

   onButtonClick(){
    console.log("Clicked");
  }
}
