import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ApplicationDataSource, ListItem } from './application-datasource';
import { MatTableDataSource } from '@angular/material/table';



@Component({
	selector: 'app-application',
	templateUrl: './application.component.html',
	styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements AfterViewInit{
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<ListItem>;
	dataSource: MatTableDataSource<ListItem>;


	 /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	 displayedColumns = ['id', 'name'];

	 constructor() {
		this.dataSource = new MatTableDataSource(new ApplicationDataSource().data);
	 }
   
	 ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
		this.table.dataSource = this.dataSource;
	 }

	 applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
}
