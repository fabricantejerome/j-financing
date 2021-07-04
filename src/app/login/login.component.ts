import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	hide: boolean = true;
	emailMessage: string = '';
	passwordMessage: string = '';
	loginForm: FormGroup = new FormGroup({});
	

	private validationMessages = {
		required: 'Please enter your email address',
		email: 'Please enter a valid email address'
	};

	private passwordValidationMessage = {
		required: 'Please enter your password'
	}

	constructor(private fb: FormBuilder, private router: Router) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, Validators.required]
		});

		const emailControl = this.loginForm.get('email');
		const passwordControl = this.loginForm.get('password');

		// emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(emailControl));
		// passwordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setPasswordMessage(passwordControl));
	}

	setMessage(c: AbstractControl): void {
		this.emailMessage = '';

		if ((c.touched || c.dirty) && c.errors) {
			// this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
		}
	}

	setPasswordMessage(c: AbstractControl): void {
		this.passwordMessage = '';

		if ((c.touched || c.dirty) && c.errors) {
			// this.passwordMessage = Object.keys(c.errors).map(key => this.passwordValidationMessage[key]).join(' ');
		}
	}

	onSubmit(): void {
		console.log(this.loginForm.value)
		this.router.navigate(['/dashboard']);
	}
}
