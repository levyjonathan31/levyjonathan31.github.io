import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientChecklistComponent } from './client-checklist.component';

describe('ClientChecklistComponent', () => {
  let component: ClientChecklistComponent;
  let fixture: ComponentFixture<ClientChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
