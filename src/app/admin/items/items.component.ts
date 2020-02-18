import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: unknown[];

  constructor(private afDatabase: AngularFireDatabase,) { }

  ngOnInit() {
    this.afDatabase.list('/items')
    .valueChanges()
    .subscribe((data) => {
      this.items = data;
    });
  }

}
