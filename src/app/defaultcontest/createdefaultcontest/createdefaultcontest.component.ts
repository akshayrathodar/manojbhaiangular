import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CommonService } from '../../Service/common.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-createdefaultcontest',
  templateUrl: './createdefaultcontest.component.html',
  styleUrls: ['./createdefaultcontest.component.scss']
})
export class CreatedefaultcontestComponent implements OnInit {
  contestForm: FormGroup;
  submitted = false;
  dropdowndata = [];
  selected:any;
  constructor(private fb: FormBuilder,public cs:CommonService) { }

  ngOnInit(): void {
    this.contestForm = this.fb.group({
      entry_fees: ['', Validators.required],
      totalspots:['',Validators.required],
      totalwinner:['',Validators.required],
      firstprice:['',Validators.required],
      cancellation:['',Validators.required],
      totalwinnerprice:['',Validators.required],
      totalusablebonus:['',Validators.required],
      couponcode:[''],
      discountentry:[''],
      contest_type_id:['',Validators.required]
      
   });
    this.cs.getDataFromUrl('/api/v1/match/getContestType','{Content-Type: application/json}').then((res) => {
      if(res.success) {
        this.dropdowndata = res.data;
        
      }
    }).catch((err)=>{
      console.log(err);
    })


  }

  get f() { return this.contestForm.controls; }

  onsubmit = () => {
  	
    this.submitted = true;
    if(this.contestForm.invalid) {
      return;
    }

    let send = {'contest_type_id':this.contestForm.value.contest_type_id,'entry_fees':this.contestForm.value.entry_fees,'discounted_entry_fees':this.contestForm.value.discountentry,'total_spots':this.contestForm.value.totalspots,'total_winner':this.contestForm.value.totalwinner,'first_price':this.contestForm.value.firstprice,'cancelled':this.contestForm.value.cancellation,'total_winner_price':this.contestForm.value.totalwinnerprice,'total_usable_bonus':this.contestForm.value.totalusablebonus,'coupon_code':this.contestForm.value.couponcode};
    this.cs.SubmiPostFormData('/api/v1/match/CreateDefaultContest',send,'').then((res) => {
    console.log(res);
      if(res.success) {
        Swal.fire({
		  icon: 'success',
		  title: 'Default Contest Added Successfully',
		  showConfirmButton: false,
		  timer: 1500
		});
        this.onReset();
      } 
    }).catch((err) => {
      alert('Failed to insert record');
   console.log(this.contestForm.value);
   });
  }

  onReset() {
    this.submitted = false;
    this.contestForm.reset();
  }



}
