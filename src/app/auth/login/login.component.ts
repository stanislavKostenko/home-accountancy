import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { Message } from '../../shared/interfaces/message';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'ha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message = new Message('danger', '');

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initFormGroup();
    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMessage('success', 'Registration successful');
      }
    });
  }

  private initFormGroup() {
    this.form = new FormGroup({
      'email': new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ]),
      'password': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ])
    });
  }

  private showMessage(type: string, text: string) {
    this.message = new Message(type, text);
  }

  handleFormValidator(formControlName: string): boolean {
    return this.form.get(formControlName).value !== null && this.form.get(formControlName).invalid;
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email).subscribe((user: any) => {
      if (user.length) {
        if (user[0].password === formData.password) {
          this.message.text = '';
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          // this.router.navigate([''])
        } else {
          this.showMessage('danger', 'Password is incorrect. Please try again.');
        }
      } else {
        this.showMessage('danger', 'Email address is incorrect. Please try again.');
      }
    });
  }

}
