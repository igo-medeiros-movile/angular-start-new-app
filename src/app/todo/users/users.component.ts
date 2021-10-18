import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  usersData$: Observable<User[]> = of();

  ngOnInit(): void {
    this.usersData$ = this.usersService.getUsers();
  }

}
