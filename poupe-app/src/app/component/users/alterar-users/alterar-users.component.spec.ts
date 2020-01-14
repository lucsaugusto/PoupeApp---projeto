import { TestBed, ComponentFixture, async } from '@angular/core/testing';


import { AlterarUsersComponent } from './alterar-users.component';

describe('AlterarUsersComponent', () => {
  let component: AlterarUsersComponent;
  let fixture: ComponentFixture<AlterarUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
