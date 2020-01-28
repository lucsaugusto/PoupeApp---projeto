import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPostsComponent } from './alterar-posts.component';

describe('AlterarPostsComponent', () => {
  let component: AlterarPostsComponent;
  let fixture: ComponentFixture<AlterarPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
