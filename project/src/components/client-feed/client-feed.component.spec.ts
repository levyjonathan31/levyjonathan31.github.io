import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeedComponent } from './client-feed.component';

describe('ClientFeedComponent', () => {
  let component: ClientFeedComponent;
  let fixture: ComponentFixture<ClientFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
