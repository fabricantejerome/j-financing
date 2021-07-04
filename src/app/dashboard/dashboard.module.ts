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
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { ApplicationComponent } from './application/application.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
	{ 
		path: 'dashboard', component: DashboardComponent,
		children: [
			{ path: 'application', component: ApplicationComponent },
			{ path: '', redirectTo: 'application', pathMatch: 'full'},
			{ path: 'clients', component: ClientsComponent },
			{ path: 'client-form', component: ClientFormComponent },
		]
	}
];

@NgModule({
	declarations: [
		DashboardComponent,
  		ApplicationComponent,
    	ClientsComponent,
     	ClientFormComponent
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
		MatCardModule,
		MatGridListModule,
		MatMenuModule,
		MatPaginatorModule,
		MatSortModule,
		MatTableModule,
		MatInputModule,
		MatRadioModule,
		MatDatepickerModule,
		HttpClientModule,
		MatNativeDateModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	]
})
export class DashboardModule { }
