import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


import { LoginComponent } from './login.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatIconModule,
		RouterModule.forChild(routes)
	]
})
export class LoginModule { }
