import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessesComponent } from './proccesses.component';

describe('ProccessesComponent', () => {
  let component: ProccessesComponent;
  let fixture: ComponentFixture<ProccessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
