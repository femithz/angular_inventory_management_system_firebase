import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  name : string = "";
  last_name: string = "";
  email: string = "";
  phone: string = "";
  constructor( 
     private afAuth: AngularFireAuth,
     private afstore:AngularFirestore,
     private _router: Router,
     ) { }

  ngOnInit() {
  }
  async addUser(){

    const { name ,  last_name,  email, phone } = this; 
    if (name === null ||  last_name === null ||  email === null || phone === null ) {
      // this.showAlert("Error!", "Any of this field can't be left empty!")
    } try{
      const res = await this.afAuth.auth.currentUser
      this.afstore.doc(`users/${res.uid}`).set({
        name,
         last_name,
         email,
        phone,
      })
      // this._toastrService.success("","User added successful", {
      //   timeOut: 3000
      // });
      this._router.navigate(['/admin/users'])
      // this.showAlert("Success","Response would be send to your Mail!");
    } catch (err) {
      console.log(err)
     // this._toastrService.error("","", {
      //   timeOut: 3000
      // });
    }
  }
}
