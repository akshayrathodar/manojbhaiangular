import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CommonService } from '../../Service/common.service';



@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
  contestForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,public cs:CommonService) { }

  ngOnInit(): void {
    this.contestForm = this.fb.group({
      typename: ['', Validators.required],
      description:['',Validators.required],
      maxentry:['',Validators.required],
      sortby:['',Validators.required]
   });

  }

  get f() { return this.contestForm.controls; }

  onsubmit = () => {
    this.submitted = true;
    if(this.contestForm.invalid) {
      return;
    }

    let send = {'type_name':this.contestForm.value.typename,'description':this.contestForm.value.description,'max_entry':this.contestForm.value.maxentry,'sort_by':this.contestForm.value.sortby};
    this.cs.SubmiPostFormData('/api/v1/match/CreateContestType',send,'').then((res) => {
      if(res.success) {
        alert(res.message);
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

