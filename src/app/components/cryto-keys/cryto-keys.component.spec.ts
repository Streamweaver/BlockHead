import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrytoKeysComponent } from './cryto-keys.component';

describe('CrytoKeysComponent', () => {
  let component: CrytoKeysComponent;
  let fixture: ComponentFixture<CrytoKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrytoKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrytoKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
