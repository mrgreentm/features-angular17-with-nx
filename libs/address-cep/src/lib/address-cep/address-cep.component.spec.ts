import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressCepComponent } from './address-cep.component';

describe('AddressCepComponent', () => {
  let component: AddressCepComponent;
  let fixture: ComponentFixture<AddressCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressCepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
