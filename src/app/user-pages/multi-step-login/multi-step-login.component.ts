import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-step-login',
  templateUrl: './multi-step-login.component.html',
  styleUrls: ['./multi-step-login.component.scss']
})
export class MultiStepLoginComponent implements OnInit {

  isCompleted: boolean;

  constructor() { }

  ngOnInit() {
  }

  onComplete(event) {
    this.isCompleted = true;
  }

}
