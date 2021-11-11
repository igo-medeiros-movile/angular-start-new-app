import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [
    TodoComponent,
    UsersComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class TodoModule { }
