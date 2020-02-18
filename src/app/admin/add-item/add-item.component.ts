import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  item_name : string = "";
  item_price: string = "";
  item_size: string = "";
  item_color: string = "";
  item_weight: string = "";
  constructor( 
     private afAuth: AngularFireAuth,
     private afstore:AngularFirestore,
     private _router: Router,
     private notifier: NotifierService,
     ) { }

  ngOnInit() {
  }
  async addItem(){

    const { item_name ,  item_price,  item_size, item_color , item_weight} = this; 
    if (item_name === null ||  item_price === null ||  item_size === null || item_color === null || item_weight === null ) {
      // this.showAlert("Error!", "Any of this field can't be left empty!")
    } try{
      const res = await this.afAuth.auth.currentUser
      this.afstore.doc(`items/${res.uid}`).set({
        item_name,
        item_price,
        item_size,
        item_color,
        item_weight,
      })
      // this._toastrService.success("","User added successful", {
      //   timeOut: 3000
      // });
      this._router.navigate(['/admin/items'])
      // this.showAlert("Success","Response would be send to your Mail!");
    } catch (err) {
      console.log(err)
     // this._toastrService.error("","", {
      //   timeOut: 3000
      // });
    }
  }

}
