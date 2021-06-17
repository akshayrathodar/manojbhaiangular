import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestComponent } from './contest/contest.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BarRatingModule } from "ngx-bar-rating";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'contest', component: ContestComponent },
]
@NgModule({
  declarations: [ContestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    BarRatingModule,
    NgbModule
  ]
})
export class ContestModule { }
