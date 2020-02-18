import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {  AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email : string = ""
  password : string = ""
  cpassword : string = ""
  username : string = ""
  role : string = ""
  // 
  constructor( 
    private router: Router, 
    private user: AuthService,
     private afAuth: AngularFireAuth,
      private afstore:AngularFirestore,
      // private _toastrService: ToastrService 
      ) { }

  ngOnInit() {}
 async register(){
    const {email , password, cpassword,username,role} = this; 
    if (password !== cpassword) {
      // this.showAlert("Error!", "Paaword don't match")
    } try{
      // const loading = await this.loadingController.create({
      //   message: 'Please wait...',
      //   duration: 3000
      // });
      // await loading.present();
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  
      this.afstore.doc(`users/${res.user.uid}`).set({
        username,
        email,
        role,
        password,
      })

      this.user.setUser({
        email,
        uid: res.user.uid
      })
      // this._toastrService.success("Success","Registration is successful", {
      //   timeOut: 3000
      // });
      this.router.navigate(['auth/login']);
    } catch (err) {
      // this._toastrService.error("",`${err}`, {
      //   timeOut: 3000
      // });
    }
  }

}
