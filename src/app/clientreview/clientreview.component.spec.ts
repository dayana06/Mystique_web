import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientreviewComponent } from './clientreview.component';

describe('ClientreviewComponent', () => {
  let component: ClientreviewComponent;
  let fixture: ComponentFixture<ClientreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
