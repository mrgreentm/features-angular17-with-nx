import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './interfaces/addres.interface';

@Injectable()
export class FinderCepService {
  http = inject(HttpClient)
  url = "https://viacep.com.br/ws/"
  formatResponse = "/json"
  addres = signal<Address[]>([])

  getAddressByCep(cep: string): Observable<Address> {
    const uri = this.url + cep;
    const url = uri + this.formatResponse;
    return this.http.get<Address>(url);
  }
  setAddress(address: Address): void {
    this.addres().push(address);
  }
}
