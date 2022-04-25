/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutoListComponent } from './Auto-List.component';

describe('AutoListComponent', () => {
  let component: AutoListComponent;
  let fixture: ComponentFixture<AutoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
