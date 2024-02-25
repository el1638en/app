import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { User } from '../core/models/user';
import { UserService } from '../_services/user.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  @Input() user!: User;
  patient!: any;
  registeredUser!: any;
  private readonly unsubscribe$ = new Subject();
  form: any = {};
  isSuccessful = false;
  infoRegisteredFailed = false;
  errorMessage = '';
  isLoggedIn = false;


  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) {
  }

  ngOnInit() {
    // if (this.tokenStorageService.getToken()) {
    //   this.isLoggedIn = true;
    //   if (window.localStorage) {
    //     if (!localStorage.getItem('firstLoad')) {
    //       localStorage['firstLoad'] = true;
    //       window.location.reload();
    //     } else {
    //       localStorage.removeItem('firstLoad');
    //     }
    //   }
    // }
    // this.currentUser = this.tokenStorageService.getUser();
    // this.registeredUser = this.userService.getUserByEmail(this.currentUser.email).pipe(
    //   takeUntil(this.unsubscribe$)).subscribe(
    //   (data) => {
    //     this.registeredUser = data;
    //     this.userService.getUserContent(this.registeredUser.id).subscribe(
    //       (data) => {
    //         this.patient = data;
    //       }
    //     );
    //   }
    // );
  }

  onSubmit() {
    // console.log("form submitted");
    // this.form.email = this.currentUser.email;
    // this.userService.registerPatientInfo(this.form).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.infoRegisteredFailed = false;
    //     window.location.reload();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.infoRegisteredFailed = true;
    //   }
    // );
  }

  ngOnDestroy() {
    // this.unsubscribe$.next;
  }
}
