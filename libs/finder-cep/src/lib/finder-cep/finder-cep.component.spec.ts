import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinderCepComponent } from './finder-cep.component';

describe('FinderCepComponent', () => {
  let component: FinderCepComponent;
  let fixture: ComponentFixture<FinderCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinderCepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinderCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
