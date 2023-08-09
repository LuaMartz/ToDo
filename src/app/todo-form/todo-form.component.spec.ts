import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from './todo-form.component';

describe('FormsModule', () => {
  let component: FormsModule;
  let fixture: ComponentFixture<FormsModule>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsModule]
    });
    fixture = TestBed.createComponent(FormsModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
