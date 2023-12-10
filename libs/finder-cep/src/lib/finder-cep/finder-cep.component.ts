import { Route, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FinderCepService } from './finder-cep.service';
import { Address } from './interfaces/addres.interface';
import { HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs/operators';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
]

@Component({
  selector: 'consulta-cep-finder-cep',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule, ...MATERIAL_MODULES],
  providers: [FinderCepService],
  templateUrl: './finder-cep.component.html',
  styleUrl: './finder-cep.component.scss',
})
export class FinderCepComponent {
  form!: FormGroup;
  address!: Address;
  finderCepService = inject(FinderCepService)
  router = inject(Router)
  constructor() {
    this.form = new FormGroup(
      {
        cep: new FormControl()
      }
    )
  }

  getAddressByCep(): void {
    const cep = this.form.get("cep")?.value;
    this.finderCepService.getAddressByCep(cep)
      .pipe(take(1))
      .subscribe((address: Address) => {
        this.finderCepService.setAddress(address);
        this.router.navigateByUrl('/address')
        console.log(this.finderCepService.addres())
      })
  }
}
