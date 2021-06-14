import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarModule } from 'ng-fullcalendar';

import { EmailComponent } from './email/email.component';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TodoComponent } from './todo-list/todo/todo.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { DragulaModule } from 'ng2-dragula';



const routes: Routes = [
  { path: 'email', component: EmailComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'todo-list/todo', component: TodoComponent },
  { path: 'kanban-board', component: KanbanBoardComponent },
]

@NgModule({
  declarations: [EmailComponent, CalendarComponent, ChatComponent, TicketsComponent , TodoComponent, KanbanBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FullCalendarModule,
    ReactiveFormsModule,
    NgbModule,
    DragulaModule,
  ]
})
export class AppsModule { }
