import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdarComponent } from './zdar.component';

describe('ZdarComponent', () => {
  let component: ZdarComponent;
  let fixture: ComponentFixture<ZdarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
