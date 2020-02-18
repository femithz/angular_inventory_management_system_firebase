import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  customer_name : string = "";
  item_price: string = "";
  item_quantity: string = "";
  customer_phone: string = "";
  item_name: string = "";
  constructor( 
     private afAuth: AngularFireAuth,
     private afstore:AngularFirestore,
     private _router: Router,
   
     private notifier: NotifierService,
     ) { }

  ngOnInit() {
  }
  async addOrder(){

    const { customer_name ,  item_price,  item_name, customer_phone , item_quantity} = this; 
    if (customer_name === null ||  item_price === null ||  item_name === null || customer_phone === null || item_quantity === null ) {
      // this.showAlert("Error!", "Any of this field can't be left empty!")
    } try{
      const res = await this.afAuth.auth.currentUser
      this.afstore.doc(`orders/${res.uid}`).set({
        customer_name,
        item_price,
        item_name,
        customer_phone,
        item_quantity,
      })
      // this._toastrService.success("","User added successful", {
      //   timeOut: 3000
      // });
      this.notifier.notify("success", "Order successfully added!");
      this._router.navigate(['/admin/orders'])
      // this.showAlert("Success","Response would be send to your Mail!");
    } catch (err) {
      console.log(err)
     // this._toastrService.error("","", {
      //   timeOut: 3000
      // });
    }
  }
}
