import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMetaDataComponent } from './record-meta-data.component';

describe('RecordMetaDataComponent', () => {
  let component: RecordMetaDataComponent;
  let fixture: ComponentFixture<RecordMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordMetaDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
