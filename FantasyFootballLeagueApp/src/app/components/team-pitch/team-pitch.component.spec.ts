import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPitchComponent } from './team-pitch.component';

describe('TeamPitchComponent', () => {
  let component: TeamPitchComponent;
  let fixture: ComponentFixture<TeamPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
