import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicespanelComponent } from './servicespanel.component';

describe('ServicespanelComponent', () => {
  let component: ServicespanelComponent;
  let fixture: ComponentFixture<ServicespanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicespanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicespanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
