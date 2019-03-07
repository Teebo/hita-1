import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AppLoaderService } from '../app-loader/app-loader.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { UIHelperService } from '../../../landing-page/ui-helper.service';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private appLoaderService: AppLoaderService,
    public toastr: ToastrManager,
    private uiHelperService: UIHelperService
    ) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.uiHelperService.setIsAuthenticationFormVisible(false);
    this.appLoaderService.open();
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.appLoaderService.close();
        this.toastr.successToastr('Account was created', 'Success');
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        this.appLoaderService.close();
        this.uiHelperService.setIsAuthenticationFormVisible(true);
        this.toastr.errorToastr(err.message, 'Error');
      });
  }

  login(email: string, password: string) {
    this.uiHelperService.setIsAuthenticationFormVisible(false);
    this.appLoaderService.open();
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.appLoaderService.close();
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        this.appLoaderService.close();
        this.uiHelperService.setIsAuthenticationFormVisible(true);
        this.toastr.errorToastr(err.message, 'Error');
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }
}
