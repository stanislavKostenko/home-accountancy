import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { Router } from '@angular/router';
import { Message } from '../../shared/interfaces/message';
import { of } from 'rxjs';

@Component({
  selector: 'ha-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: Message = new Message('danger', '');
  hasError: boolean;

  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.initFormGroup();
  }
  private initFormGroup() {
    this.form = new FormGroup({
      'email': new FormControl(
        null,
        [Validators.required, Validators.email],
        (control: FormControl) => {
          if (control.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            return this.forbiddenEmails(control);
          }
          return of(null);
        }
      ),
      'password': new FormControl(
        null,
        [Validators.required, Validators.minLength(6)]
      ),
      'username': new FormControl(
        null,
        [Validators.required]
      ),
      'agree': new FormControl(
        false,
        [Validators.requiredTrue]
      ),
    });
  }

  private showMessage(type: string, text: string) {
    this.message = new Message(type, text);
  }

  onSubmit() {
    const {email, password, username} = this.form.value;
    const user = new UserInterface(email, password, username);

    this.userService.createNewUser(user).subscribe(() => {
      this.router.navigate(['./login'], {queryParams: {nowCanLogin: true}});
    });
    console.log(this.form);
  }

  handleFormValidator(formControlName: string): boolean {
    return this.form.get(formControlName).value !== null && this.form.get(formControlName).invalid;
  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.userService.getUserByEmail(control.value).subscribe((user: any) => {
        if (user.length) {
          this.hasError = true;
          resolve({forbiddenEmail: true});
          this.showMessage('danger', 'This email has already exist');
        } else {
          this.hasError = false;
          resolve(null);
        }
      });
    });
  }

}
