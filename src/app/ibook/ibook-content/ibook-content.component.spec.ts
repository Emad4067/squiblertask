import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbookContentComponent } from './ibook-content.component';

describe('IbookContentComponent', () => {
  let component: IbookContentComponent;
  let fixture: ComponentFixture<IbookContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IbookContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbookContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
