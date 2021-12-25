import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTransferListComponent } from './player-transfer-list.component';

describe('PlayerTransferListComponent', () => {
  let component: PlayerTransferListComponent;
  let fixture: ComponentFixture<PlayerTransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTransferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
