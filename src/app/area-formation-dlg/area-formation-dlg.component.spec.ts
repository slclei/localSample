import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFormationDlgComponent } from './area-formation-dlg.component';

describe('AreaFormationDlgComponent', () => {
  let component: AreaFormationDlgComponent;
  let fixture: ComponentFixture<AreaFormationDlgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaFormationDlgComponent]
    });
    fixture = TestBed.createComponent(AreaFormationDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
