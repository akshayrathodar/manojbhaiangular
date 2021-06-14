import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BarRatingModule } from "ngx-bar-rating";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'widgets', component: WidgetsComponent },
]
@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    BarRatingModule,
    NgbModule
  ]
})
export class WidgetsModule { }
