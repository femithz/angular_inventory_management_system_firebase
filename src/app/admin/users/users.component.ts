import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(  private afDatabase: AngularFireDatabase,) {
 
   }

  ngOnInit() {
    this.afDatabase.list('/users')
    .valueChanges()
    .subscribe((data) => {
      this.users = data;
      console.log(this.users)
    });
  }

}
