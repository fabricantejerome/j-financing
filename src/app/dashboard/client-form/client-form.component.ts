import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/interface/client';

@Component({
	selector: 'app-client-form',
	templateUrl: './client-form.component.html',
	styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
	clientForm: FormGroup = new FormGroup({});

	constructor(private fb: FormBuilder, private clientService: ClientService) { }

	ngOnInit(): void {
		this.clientForm = this.fb.group({
			firstname: [null, Validators.required],
			lastname: [null, Validators.required],
			mobile: [null, [Validators.required, Validators.min(11)]],
			email: [null, [Validators.required, Validators.email]],
			address: [null, Validators.required],
			gender: [null, Validators.required],
			birthdate: [null, Validators.required],
		});
	}

	handleSubmit(): void {
		console.log(this.clientForm.value)
		const clientValue = this.clientForm.value

		const client: Client = {
			firstname: clientValue.firstname,
			lastname: clientValue.lastname,
			mobile: clientValue.mobile,
			email: clientValue.email,
			gender: clientValue.gender,
			address: clientValue.address,
			active: true
		}

		this.clientService.add(client).subscribe();
	}
}
