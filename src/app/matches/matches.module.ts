import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BarRatingModule } from "ngx-bar-rating";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LivematchesComponent } from './livematches/livematches.component';

import { DataTablesModule } from 'angular-datatables';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import { CompletedmatchesComponent } from './completedmatches/completedmatches.component';

const routes: Routes = [
  { path: 'livematches', component: LivematchesComponent },
  { path: 'upcomingmatches', component: UpcomingmatchesComponent },
  { path: 'completedmatches', component: CompletedmatchesComponent },
//  { path: 'viewcontesttype', component: ViewcontesttypeComponent},
]
@NgModule({
  declarations: [ LivematchesComponent, UpcomingmatchesComponent, CompletedmatchesComponent ],
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
export class MatchesModule { }
