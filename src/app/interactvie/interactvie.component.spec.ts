import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractvieComponent } from './interactvie.component';

describe('InteractvieComponent', () => {
  let component: InteractvieComponent;
  let fixture: ComponentFixture<InteractvieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractvieComponent]
    });
    fixture = TestBed.createComponent(InteractvieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
