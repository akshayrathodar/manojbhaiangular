import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestComponent } from './contest/contest.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BarRatingModule } from "ngx-bar-rating";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewcontesttypeComponent } from './viewcontesttype/viewcontesttype.component';

import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: 'contest', component: ContestComponent },
  { path: 'viewcontesttype', component: ViewcontesttypeComponent},
]
@NgModule({
  declarations: [ContestComponent, ViewcontesttypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    BarRatingModule,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContestModule { }
