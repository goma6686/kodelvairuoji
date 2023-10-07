import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredformComponent } from './registeredform.component';

describe('RegisteredformComponent', () => {
  let component: RegisteredformComponent;
  let fixture: ComponentFixture<RegisteredformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
