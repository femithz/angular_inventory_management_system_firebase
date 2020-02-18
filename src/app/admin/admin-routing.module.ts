import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemsComponent } from './items/items.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
              path: '',
              redirectTo: 'user',
              pathMatch: 'full'
      },
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'add',
        component: AddUserComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'add-item',
        component: AddItemComponent
      },
      {
        path: 'add-order',
        component: AddOrderComponent
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
