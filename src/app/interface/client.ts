export interface Client {
    id?: number;
    firstname: string;
    lastname: string;
    address: string;
    email: string;
    mobile: string;
    gender: string;
    birthdate?: string;
    active: boolean;
}
