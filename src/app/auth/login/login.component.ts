import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string = ""
  password : string = ""
constructor(
   private router: Router, 
   public user: AuthService,
   private afAuth: AngularFireAuth,
    ) { }

ngOnInit() {}
async navigateToDashboard(){
 try {
  // const loading = await this.loadingController.create({
  //   message: 'Please wait...',
  //   duration: 3000
  // });
  // await loading.present();
   const {email , password} = this; 
       const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
  
        if (res.user) {
                    this.user.setUser({
                      email,
                      uid: res.user.uid
                    })
        } 
       this.router.navigate(['/admin/']);
 } catch (err) {

 }
}

}
