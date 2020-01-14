import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverUsersComponent } from './remover-users.component';

describe('RemoverUsersComponent', () => {
  let component: RemoverUsersComponent;
  let fixture: ComponentFixture<RemoverUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
