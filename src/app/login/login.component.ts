import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { CommonService } from '../Service/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(public router:Router,private fb: FormBuilder,public cs:CommonService) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      password:['',Validators.required]
   });
  }

  gotoDash = function () {
    
    let email = this.angForm.controls.email.value;
    let pass = this.angForm.controls.password.value;
    if(email != '' && pass != '') {
       let fm = {'email':email,'password':pass,'device_id':'iphone 10'};
       this.cs.SubmiPostFormData('/api/v1/admin/login',fm).then((response) => {   
         console.log(response);  
         if(response.success == true) {
          //  this.toastr.success('Login Success');
           this.cs.setLogin(true);
         } else {
          //  this.toastr.error('Login Failed');
         }
       }).catch((error) => {
        alert('Login Failed');
       });
    } else {
     alert('Email And Password are required!'); 
    }
    //alert(this.angForm.controls.email.value);
    
   //console.log(this.angForm);
   //this.router.navigateByUrl('/dashboard');
 };

}
