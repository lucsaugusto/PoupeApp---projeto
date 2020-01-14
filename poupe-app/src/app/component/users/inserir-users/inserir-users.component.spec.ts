import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirUsersComponent } from './inserir-users.component';

describe('InserirUsersComponent', () => {
  let component: InserirUsersComponent;
  let fixture: ComponentFixture<InserirUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
