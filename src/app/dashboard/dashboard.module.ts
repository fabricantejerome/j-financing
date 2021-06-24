import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		NoopAnimationsModule,
		MatButtonModule,
		RouterModule.forChild(routes)
	]
})
export class DashboardModule { }
