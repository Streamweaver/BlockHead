import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMinerComponent } from './block-miner.component';

describe('BlockMinerComponent', () => {
  let component: BlockMinerComponent;
  let fixture: ComponentFixture<BlockMinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockMinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
