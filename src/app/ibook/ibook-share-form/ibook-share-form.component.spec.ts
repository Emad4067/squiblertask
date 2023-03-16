import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbookShareFormComponent } from './ibook-share-form.component';

describe('IbookShareFormComponent', () => {
  let component: IbookShareFormComponent;
  let fixture: ComponentFixture<IbookShareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IbookShareFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbookShareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
