import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private afDatabase: AngularFireDatabase,) { }

  ngOnInit() {
    this.afDatabase.list('/orders')
    .valueChanges()
    .subscribe((data) => {
      this.orders = data;
    });
  }

}
