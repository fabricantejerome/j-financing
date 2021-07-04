import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interface/client';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})
export class ClientService {
	private apiUrl = 'http://localhost:5000/clients';

	constructor(private http: HttpClient) { }

	browse(): Observable<Client[]> {
		return this.http.get<Client[]>(this.apiUrl);
	}

	add(client: Client): Observable<Client> {
		return this.http.post<Client>(this.apiUrl, client, httpOptions);
	}
}
