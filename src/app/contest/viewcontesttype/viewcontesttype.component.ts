import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Service/common.service';
import Swal from 'sweetalert2'

import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewcontesttype',
  templateUrl: './viewcontesttype.component.html',
  styleUrls: ['./viewcontesttype.component.scss']
})
export class ViewcontesttypeComponent implements OnInit {
  public data:any = [];
  public editSection:boolean = false;
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(public cs:CommonService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.cs.getDataFromUrl('/api/v1/match/getContestType','{Content-Type: application/json}').then((res) => {
      if(res.success) {
      console.log(res.data);
        this.data = res.data;
        this.dtTrigger.next();
      }
    }).catch((err)=>{
      console.log(err);
    })

  }

  editForm() {
     this.editSection = !this.editSection;
  }

  deleteRecord(id) {

Swal.fire({title: 'Do you want to Delete Contest Type?',
  showDenyButton: true,
  confirmButtonText: `Yes`,
  denyButtonText: `i Don't`,
}).then((result) => {
  if (result.isConfirmed) {
      this.cs.deleteDataById('/api/v1/match/ContestType/'+id).then((res) => {
      if(res.success) {
        Swal.fire('Deleted!','Contest type has been Deleted Successfully','success');
        
        this.data = this.data.filter(function(item) {
           return item._id != id;
        });
        
      } else {

      }
    }).catch((err) => {
      console.log(err);
    })
  }

  })

}
}
