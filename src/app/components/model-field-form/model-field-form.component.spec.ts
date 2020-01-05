import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ModelFieldFormComponent } from "./model-field-form.component";

describe("EventModelFieldFormComponent", () => {
  let component: ModelFieldFormComponent;
  let fixture: ComponentFixture<ModelFieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelFieldFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
