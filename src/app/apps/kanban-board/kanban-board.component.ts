import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
  providers: [DragulaService]   
})
export class KanbanBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
