import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductvendorComponent } from './productvendor.component';

describe('ProductvendorComponent', () => {
  let component: ProductvendorComponent;
  let fixture: ComponentFixture<ProductvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductvendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
