import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BarRatingModule } from "ngx-bar-rating";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { CreatedefaultcontestComponent } from './createdefaultcontest/createdefaultcontest.component';
import { ViewdefaultcontestComponent } from './viewdefaultcontest/viewdefaultcontest.component';
const routes: Routes = [
     { path: 'create', component: CreatedefaultcontestComponent },
     { path: 'view', component: ViewdefaultcontestComponent},
]
@NgModule({
  declarations: [CreatedefaultcontestComponent, ViewdefaultcontestComponent],
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
export class DefaultContestModule { }
