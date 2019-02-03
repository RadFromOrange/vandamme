import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdarparamComponent } from './zdarparam.component';

describe('ZdarparamComponent', () => {
  let component: ZdarparamComponent;
  let fixture: ComponentFixture<ZdarparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdarparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdarparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
