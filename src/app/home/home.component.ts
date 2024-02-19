import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from 'src/app/core/models/user';
import { Hospital } from 'src/app/core/models/hospital';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  currentUser: any;
  @Input() user!: User;
  patient!: any;
  registeredUser!: any;
  patientFullAddress!: string;
  private readonly unsubscribe$ = new Subject();

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorageService.getUser();
      this.registeredUser =this.userService.getUserByEmail(this.currentUser.email).pipe(
        takeUntil(this.unsubscribe$)).subscribe(
          (data) => {
        this.registeredUser = data;
        this.userService.getUserContent(this.registeredUser.id).subscribe(
          (data) => {
            this.patient = data;
          }
        );
          }
        );
    }

  }


}
