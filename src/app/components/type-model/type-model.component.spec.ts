import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeModelComponent } from './type-model.component';

describe('TypeModelComponent', () => {
  let component: TypeModelComponent;
  let fixture: ComponentFixture<TypeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
