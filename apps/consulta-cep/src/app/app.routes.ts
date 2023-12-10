import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: "",
    loadChildren: ()=> import('@consulta-cep/finder-cep').then(c=>c.finderCepRoutes)
  },
  {
    path: "address",
    loadChildren: ()=> import('@consulta-cep/address-cep').then(c=>c.addressCepRoutes)
  }
];
