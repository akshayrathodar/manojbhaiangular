import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { RtlLayoutComponent } from './rtl-layout/rtl-layout.component';
import { ChartsModule } from 'ng2-charts';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MorrisJsModule } from 'angular-morris-js';

import { BarRatingModule } from "ngx-bar-rating";

export function HttpLoaderFactory(http: HttpClient) { 
  return new TranslateHttpLoader(http,  './assets/i18n/');
}

const routes: Routes = [
  { path: 'rtl-layout', component: RtlLayoutComponent },
]
@NgModule({
  declarations: [
    RtlLayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    ChartsModule,
    CommonModule,
    NgbModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    MorrisJsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 60,
      "space": -10,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,
      "showImage": true,
      "responsive": true,
      "showInnerStroke" : true,
      "imageHeight": 105,
      "imageWidth": 105,
      "showTitle" : false,
      "showSubtitle" : false
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }})
    
  ],
  providers: [],
})
export class LayoutModule { }
