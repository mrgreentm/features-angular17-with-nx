import { FinderCepService } from './../../../../finder-cep/src/lib/finder-cep/finder-cep.service';
import { Address } from './../../../../finder-cep/src/lib/finder-cep/interfaces/addres.interface';
import { Component, signal, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';


@Component({
  selector: 'consulta-cep-address-cep',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule],
  providers: [FinderCepService],
  templateUrl: './address-cep.component.html',
  styleUrl: './address-cep.component.scss',
})
export class AddressCepComponent implements OnInit, AfterViewInit {
  address = signal<Address[]>([]);
  finderCepService = inject(FinderCepService)
  router = inject(Router)

  ngOnInit(): void {
    this.loadAllAddress();
    this.verifyIfAddresArrayIsEmpty();
  }
  ngAfterViewInit(): void {
    this.loadAllAddress()
  }
  loadAllAddress(): void {
    this.address().push(...this.finderCepService.addres())
  }
  verifyIfAddresArrayIsEmpty(): void {
    if (!this.address().length)
      this.redirectToFinderCep();
  }
  redirectToFinderCep(): void {
    this.router.navigateByUrl('');
  }
}
