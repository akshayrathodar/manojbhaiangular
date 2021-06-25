import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../Service/common.service';
import Swal from 'sweetalert2'

import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewdefaultcontest',
  templateUrl: './viewdefaultcontest.component.html',
  styleUrls: ['./viewdefaultcontest.component.scss']
})
export class ViewdefaultcontestComponent implements OnInit {
  public data:any = [];
  constructor(public cs:CommonService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit(): void {
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.cs.getDataFromUrl('/api/v1/match/getDefaultContest','{Content-Type: application/json}').then((res) => {
      if(res.success) {
        this.data = res.data;
        this.dtTrigger.next();
      }
    }).catch((err)=>{
      console.log(err);
    })

  }

}
